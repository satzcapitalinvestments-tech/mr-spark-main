const DEFAULT_SITE_URL = "https://mr-spark-main.vercel.app";
const DEFAULT_TELEGRAM_URL = "#";
const DEFAULT_PHONE_DISPLAY = "+49 123 4567890";
const DEFAULT_CONTACT_EMAIL = "kontakt@mr-spark.de";

function normalizeSiteUrl(value?: string) {
  const raw = value?.trim() || DEFAULT_SITE_URL;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

function normalizePhoneHref(value?: string) {
  if (!value) {
    return null;
  }

  const digits = value.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : null;
}

function splitCsv(value?: string) {
  return value
    ?.split(",")
    .map((entry) => entry.trim())
    .filter(Boolean) ?? [];
}

function parseInteger(value: string | undefined, fallback: number) {
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
const brandName = process.env.NEXT_PUBLIC_BRAND_NAME?.trim() || "Mr Spark";
const legalCompanyName = process.env.LEGAL_COMPANY_NAME?.trim() || brandName;
const legalPublishReady = process.env.LEGAL_PUBLISH_READY === "true";
const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || DEFAULT_TELEGRAM_URL;
const phoneDisplay = process.env.CONTACT_PHONE_DISPLAY?.trim() || DEFAULT_PHONE_DISPLAY;
const contactEmail = process.env.CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;
const serviceAreas = splitCsv(process.env.SERVICE_AREAS);
const indexingEnabled = process.env.SITE_INDEXING_ENABLED === "true";
const usesPlaceholderContactData =
  telegramUrl === DEFAULT_TELEGRAM_URL ||
  phoneDisplay === DEFAULT_PHONE_DISPLAY ||
  contactEmail === DEFAULT_CONTACT_EMAIL;

export const siteConfig = {
  brandName,
  defaultLocale: "de",
  siteUrl,
  indexingEnabled,
  telegramUrl,
  phoneDisplay,
  phoneHref: normalizePhoneHref(process.env.CONTACT_PHONE_E164 || process.env.CONTACT_PHONE_DISPLAY || DEFAULT_PHONE_DISPLAY),
  contactEmail,
  emergencyHours: process.env.EMERGENCY_HOURS_LABEL?.trim() || "24h erreichbar",
  serviceAreas: serviceAreas.length > 0 ? serviceAreas : ["Deutschland"],
  leadWebhookUrl: process.env.LEAD_WEBHOOK_URL?.trim(),
  leadWebhookBearerToken: process.env.LEAD_WEBHOOK_BEARER_TOKEN?.trim(),
  leadDestinationLabel: process.env.LEAD_DESTINATION_LABEL?.trim() || "operations webhook",
  leadMinSubmitMs: parseInteger(process.env.LEAD_MIN_SUBMIT_MS, 3000),
  leadRateLimitMax: parseInteger(process.env.LEAD_RATE_LIMIT_MAX, 5),
  leadRateLimitWindowMs: parseInteger(process.env.LEAD_RATE_LIMIT_WINDOW_MS, 10 * 60 * 1000),
  usesPlaceholderContactData,
  legal: {
    publishReady: legalPublishReady,
    companyName: legalCompanyName,
    representative: process.env.LEGAL_REPRESENTATIVE?.trim(),
    streetAddress: process.env.LEGAL_STREET_ADDRESS?.trim(),
    postalCode: process.env.LEGAL_POSTAL_CODE?.trim(),
    city: process.env.LEGAL_CITY?.trim(),
    country: process.env.LEGAL_COUNTRY?.trim() || "DE",
    vatId: process.env.LEGAL_VAT_ID?.trim(),
    tradeRegister: process.env.LEGAL_TRADE_REGISTER?.trim(),
    tradeRegisterNumber: process.env.LEGAL_TRADE_REGISTER_NUMBER?.trim(),
  },
} as const;

export function buildSiteUrl(pathname = "/") {
  return new URL(pathname, `${siteConfig.siteUrl}/`).toString();
}

export function hasPublishedLegalDetails() {
  const legal = siteConfig.legal;

  return Boolean(
    legal.publishReady &&
      legal.companyName &&
      legal.representative &&
      legal.streetAddress &&
      legal.postalCode &&
      legal.city,
  );
}

export function getPublicContactData() {
  return {
    brandName: siteConfig.brandName,
    siteUrl: siteConfig.siteUrl,
    telegramUrl: siteConfig.telegramUrl,
    phoneDisplay: siteConfig.phoneDisplay,
    phoneHref: siteConfig.phoneHref,
    contactEmail: siteConfig.contactEmail,
    emergencyHours: siteConfig.emergencyHours,
    serviceAreas: siteConfig.serviceAreas,
  };
}
