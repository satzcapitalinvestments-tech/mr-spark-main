import type { Metadata } from "next";
import { HeroSection, PageSection, SectionHeading } from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";
import { hasPublishedLegalDetails, siteConfig } from "@/lib/site-config";

const legalReady = hasPublishedLegalDetails();

export const metadata: Metadata = buildPageMetadata({
  title: "Impressum",
  description: "Anbieterkennzeichnung fuer Mr Spark. Rechtliche Angaben bleiben bis zur Freigabe als Platzhalter markiert.",
  pathname: "/de/impressum",
  locale: "de",
  localizedSlug: "impressum",
  includeLocaleAlternates: true,
  noIndex: !legalReady,
});

function legalValue(value?: string | null) {
  return value || "Erfordert Inhaber- oder Rechtsfreigabe";
}

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Rechtliche Pflichtangaben"
        title="Impressum in rechtlicher Pruefung"
        description="Die finalen Impressumsangaben werden vor Veroeffentlichung durch Inhaber oder Rechtsberatung freigegeben. Bis dahin bleiben fehlende Angaben bewusst als Platzhalter markiert."
        points={[
          "Keine erfundenen Register- oder Steuerdaten",
          "No-index bleibt bis zur finalen Freigabe aktiv",
          "Kontakt und Datenschutz sind trotzdem direkt erreichbar",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Kontakt oeffnen" }}
        secondaryCta={{ href: "/de/datenschutz", label: "Datenschutz ansehen", variant: "ghost" }}
      />

      {!legalReady ? (
        <PageSection>
          <div className="rounded-[2rem] border border-amber-300/80 bg-amber-50 px-6 py-6 text-amber-950 shadow-[var(--shadow-soft)]">
            <p className="font-semibold">
              Hinweis: Dieses Impressum bleibt bis zur finalen Unternehmens- und Rechtsfreigabe bewusst unvollstaendig und wird nicht indexiert.
            </p>
          </div>
        </PageSection>
      ) : null}

      <PageSection>
        <SectionHeading
          eyebrow="Pflichtangaben"
          title="Rechtliche Angaben vor der finalen Freigabe"
          description="Fehlende Angaben werden offen als Platzhalter markiert. Es werden keine Register-, Umsatzsteuer- oder Adressdaten erfunden."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Anbieter</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{legalValue(siteConfig.legal.companyName)}</p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Vertreten durch</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {legalValue(siteConfig.legal.representative)}
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Anschrift</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {siteConfig.legal.streetAddress
                ? `${siteConfig.legal.streetAddress}, ${siteConfig.legal.postalCode || ""} ${siteConfig.legal.city || ""}`.trim()
                : "Erfordert Inhaber- oder Rechtsfreigabe"}
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Register und Steuerdaten</h2>
            <div className="mt-3 space-y-1 text-sm leading-7 text-[color:var(--muted)]">
              <p>Handelsregister: {legalValue(siteConfig.legal.tradeRegister)}</p>
              <p>Registernummer: {legalValue(siteConfig.legal.tradeRegisterNumber)}</p>
              <p>USt-IdNr.: {legalValue(siteConfig.legal.vatId)}</p>
            </div>
          </section>
        </div>
      </PageSection>
    </main>
  );
}
