"use client";
import { useState } from "react";

type LeadFormState = {
  name: string;
  contact: string;
  city: string;
  service: string;
  urgency: "Normal" | "Heute" | "Sofort";
  message: string;
  website: string;
};

export default function WhatsAppLeadForm({ sourcePage }: { sourcePage: string }) {
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    contact: "",
    city: "",
    service: "",
    urgency: "Normal",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          sourcePage,
          startedAt,
        }),
      });

      const payload = (await response.json()) as {
        ok: boolean;
        error?: string;
        contactUrl?: string;
        tracking?: {
          event: string;
          method: string;
          sourcePage: string;
        };
      };

      if (!response.ok || !payload.ok || !payload.contactUrl) {
        throw new Error(payload.error || "Die Anfrage konnte nicht vorbereitet werden.");
      }

      if (typeof window !== "undefined") {
        (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
          event: payload.tracking?.event || "lead_submitted",
          leadMethod: payload.tracking?.method || "telegram",
          sourcePage: payload.tracking?.sourcePage || sourcePage,
        });
        window.open(payload.contactUrl, "_blank", "noopener,noreferrer");
      }

      setFeedback("Anfrage vorbereitet. Telegram wurde in einem neuen Tab geoeffnet.");
      setStartedAt(Date.now());
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Bitte erneut versuchen.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="panel-surface grid gap-4 p-6 md:p-7" onSubmit={handleSubmit}>
      <div>
        <p className="section-eyebrow">Lead-Details</p>
        <h3 className="mt-3 text-2xl font-semibold text-[color:var(--ink)]">Direkt per Telegram senden</h3>
        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
          Die Anfrage wird zuerst an den vorhandenen Lead-Endpoint uebergeben. Danach oeffnet sich Telegram
          mit einer strukturierten Nachricht fuer die operative Weiterbearbeitung.
        </p>
      </div>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        Name
        <input
          className="form-input"
          placeholder="Ihr Name"
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        Telefon oder E-Mail
        <input
          className="form-input"
          placeholder="Kontaktmöglichkeit"
          value={form.contact}
          onChange={(event) => setForm({ ...form, contact: event.target.value })}
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
          Stadt
          <input
            className="form-input"
            placeholder="z. B. Berlin"
            required
            value={form.city}
            onChange={(event) => setForm({ ...form, city: event.target.value })}
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
          Service
          <input
            className="form-input"
            placeholder="z. B. Notdienst"
            required
            value={form.service}
            onChange={(event) => setForm({ ...form, service: event.target.value })}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        Dringlichkeit
        <select
          className="form-input"
          value={form.urgency}
          onChange={(event) =>
            setForm({ ...form, urgency: event.target.value as LeadFormState["urgency"] })
          }
        >
          <option value="Normal">Normal</option>
          <option value="Heute">Heute</option>
          <option value="Sofort">Sofort</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
        Nachricht
        <textarea
          className="form-input min-h-32 resize-y"
          placeholder="Was ist passiert und wie schnell brauchen Sie Hilfe?"
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
        />
      </label>

      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(event) => setForm({ ...form, website: event.target.value })}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-base justify-center bg-[color:var(--accent)] text-[color:var(--ink)] disabled:cursor-not-allowed disabled:opacity-70 hover:bg-[#ffd36c]"
      >
        {isSubmitting ? "Anfrage wird vorbereitet..." : "Telegram oeffnen"}
      </button>
      {feedback ? <p className="text-sm text-[color:var(--muted)]">{feedback}</p> : null}
    </form>
  );
}
