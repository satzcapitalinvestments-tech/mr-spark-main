import { siteConfig } from "@/lib/site-config";

const ALLOWED_URGENCY = ["Normal", "Heute", "Sofort"] as const;
const MAX_NAME_LENGTH = 80;
const MAX_CONTACT_LENGTH = 120;
const MAX_CITY_LENGTH = 80;
const MAX_SERVICE_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 1200;
const SOURCE_PAGE_PATTERN = /^\/[a-z]{2}(?:\/[-a-z0-9]+)?$/i;
const PHONE_OR_EMAIL_PATTERN =
  /^(?:(?:[^\s@]+@[^\s@]+\.[^\s@]+)|(?:\+?[0-9][0-9\s()./-]{5,}[0-9]))$/;
const leadRateBuckets = new Map<string, number[]>();

export type LeadUrgency = (typeof ALLOWED_URGENCY)[number];

export type LeadInput = {
  name: string;
  contact?: string;
  city: string;
  service: string;
  urgency: LeadUrgency;
  message?: string;
  sourcePage: string;
  website?: string;
  startedAt?: number;
};

export type LeadSubmissionResult = {
  leadId: string;
  contactUrl: string;
  delivery: "webhook_and_telegram" | "telegram_only";
  deliveryTarget: string;
  submittedAt: string;
};

type SubmissionContext = {
  ipAddress: string;
  userAgent?: string;
};

export class LeadValidationError extends Error {}

export class LeadRateLimitError extends Error {}

function sanitizeText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function sanitizeTimestamp(value: unknown) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return undefined;
  }

  return Math.trunc(value);
}

function validateLength(value: string | undefined, maxLength: number, label: string) {
  if (value && value.length > maxLength) {
    throw new LeadValidationError(`${label} ist zu lang.`);
  }
}

function validateSourcePage(sourcePage: string) {
  if (!SOURCE_PAGE_PATTERN.test(sourcePage)) {
    throw new LeadValidationError("Ungueltige Quellseite.");
  }
}

function validateContact(contact: string | undefined) {
  if (!contact) {
    return;
  }

  if (!PHONE_OR_EMAIL_PATTERN.test(contact)) {
    throw new LeadValidationError("Bitte eine gueltige Telefonnummer oder E-Mail angeben.");
  }
}

function validateSubmissionTiming(startedAt: number | undefined) {
  if (!startedAt) {
    return;
  }

  const elapsed = Date.now() - startedAt;

  if (elapsed < siteConfig.leadMinSubmitMs) {
    throw new LeadValidationError("Anfrage zu schnell gesendet. Bitte Formular kurz pruefen und erneut senden.");
  }

  if (elapsed > 24 * 60 * 60 * 1000) {
    throw new LeadValidationError("Sitzung abgelaufen. Bitte Formular erneut senden.");
  }
}

function assertRateLimit(ipAddress: string) {
  const key = ipAddress || "unknown";
  const now = Date.now();
  const windowStart = now - siteConfig.leadRateLimitWindowMs;
  const active = (leadRateBuckets.get(key) ?? []).filter((timestamp) => timestamp >= windowStart);

  if (active.length >= siteConfig.leadRateLimitMax) {
    leadRateBuckets.set(key, active);
    throw new LeadRateLimitError("Zu viele Anfragen in kurzer Zeit. Bitte in einigen Minuten erneut versuchen.");
  }

  active.push(now);
  leadRateBuckets.set(key, active);
}

export function parseLeadInput(payload: unknown): LeadInput {
  if (!payload || typeof payload !== "object") {
    throw new LeadValidationError("Ungueltige Anfrage.");
  }

  const raw = payload as Record<string, unknown>;

  const lead: LeadInput = {
    name: sanitizeText(raw.name),
    contact: sanitizeText(raw.contact) || undefined,
    city: sanitizeText(raw.city),
    service: sanitizeText(raw.service),
    urgency: sanitizeText(raw.urgency) as LeadUrgency,
    message: sanitizeText(raw.message) || undefined,
    sourcePage: sanitizeText(raw.sourcePage),
    website: sanitizeText(raw.website) || undefined,
    startedAt: sanitizeTimestamp(raw.startedAt),
  };

  if (lead.website) {
    throw new LeadValidationError("Spam erkannt.");
  }

  if (!lead.name || !lead.city || !lead.service || !lead.sourcePage) {
    throw new LeadValidationError("Bitte Name, Stadt, Service und Seite angeben.");
  }

  if (!ALLOWED_URGENCY.includes(lead.urgency)) {
    throw new LeadValidationError("Ungueltige Dringlichkeit.");
  }

  validateLength(lead.name, MAX_NAME_LENGTH, "Name");
  validateLength(lead.contact, MAX_CONTACT_LENGTH, "Kontakt");
  validateLength(lead.city, MAX_CITY_LENGTH, "Stadt");
  validateLength(lead.service, MAX_SERVICE_LENGTH, "Service");
  validateLength(lead.message, MAX_MESSAGE_LENGTH, "Nachricht");
  validateContact(lead.contact);
  validateSourcePage(lead.sourcePage);
  validateSubmissionTiming(lead.startedAt);

  return lead;
}

function createLeadId() {
  return `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function buildTelegramMessage(lead: LeadInput, leadId: string, submittedAt: string) {
  return [
    `Neue Anfrage ${siteConfig.brandName}`,
    `Lead-ID: ${leadId}`,
    `Seite: ${lead.sourcePage}`,
    `Zeitpunkt: ${submittedAt}`,
    `Name: ${lead.name}`,
    `Kontakt: ${lead.contact || "-"}`,
    `Stadt: ${lead.city}`,
    `Service: ${lead.service}`,
    `Dringlichkeit: ${lead.urgency}`,
    `Nachricht: ${lead.message || "-"}`,
  ].join("\n");
}

function buildTelegramUrl(message: string) {
  if (!siteConfig.telegramUrl || siteConfig.telegramUrl === "#") {
    return "#";
  }

  try {
    const url = new URL(siteConfig.telegramUrl);

    if (url.hostname === "t.me" && url.pathname === "/share/url") {
      url.searchParams.set("url", siteConfig.siteUrl);
      url.searchParams.set("text", message);
      return url.toString();
    }

    if (!url.searchParams.has("text")) {
      url.searchParams.set("text", message);
    }

    return url.toString();
  } catch {
    return siteConfig.telegramUrl;
  }
}

async function deliverLeadToWebhook(lead: LeadInput, leadId: string, submittedAt: string, context: SubmissionContext) {
  if (!siteConfig.leadWebhookUrl) {
    return false;
  }

  const response = await fetch(siteConfig.leadWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(siteConfig.leadWebhookBearerToken
        ? { Authorization: `Bearer ${siteConfig.leadWebhookBearerToken}` }
        : {}),
    },
    body: JSON.stringify({
      leadId,
      submittedAt,
      brand: siteConfig.brandName,
      channel: "telegram",
      destination: siteConfig.leadDestinationLabel,
      requestContext: context,
      lead,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}.`);
  }

  return true;
}

export async function submitLead(lead: LeadInput, context: SubmissionContext): Promise<LeadSubmissionResult> {
  assertRateLimit(context.ipAddress);

  const leadId = createLeadId();
  const submittedAt = new Date().toISOString();
  const message = buildTelegramMessage(lead, leadId, submittedAt);
  const contactUrl = buildTelegramUrl(message);

  let webhookDelivered = false;

  try {
    webhookDelivered = await deliverLeadToWebhook(lead, leadId, submittedAt, context);
  } catch (error) {
    console.error("[lead-intake] webhook delivery failed", {
      leadId,
      sourcePage: lead.sourcePage,
      destination: siteConfig.leadDestinationLabel,
      error: error instanceof Error ? error.message : "unknown",
    });
  }

  console.info("[lead-intake] accepted", {
    leadId,
    sourcePage: lead.sourcePage,
    urgency: lead.urgency,
    city: lead.city,
    destination: siteConfig.leadDestinationLabel,
    delivery: webhookDelivered ? "webhook_and_telegram" : "telegram_only",
  });

  return {
    leadId,
    contactUrl,
    delivery: webhookDelivered ? "webhook_and_telegram" : "telegram_only",
    deliveryTarget: siteConfig.leadDestinationLabel,
    submittedAt,
  };
}
