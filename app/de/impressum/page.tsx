import type { Metadata } from "next";
import { HeroSection, PageSection, SectionHeading } from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";
import { hasPublishedLegalDetails, siteConfig } from "@/lib/site-config";

const legalReady = hasPublishedLegalDetails();

export const metadata: Metadata = buildPageMetadata({
  title: "Impressum",
  description: "Anbieterkennzeichnung und rechtliche Pflichtangaben fuer Mr Spark.",
  pathname: "/de/impressum",
  locale: "de",
  localizedSlug: "impressum",
  includeLocaleAlternates: true,
  noIndex: !legalReady,
});

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Rechtliche Angaben"
        title="Impressum"
        description="Diese Seite enthaelt die Anbieterkennzeichnung fuer Mr Spark. Fehlende Angaben bleiben bis zur Freigabe bewusst als Platzhalter markiert."
        points={[
          "Keine erfundenen Registerdaten oder Adressen",
          "Freigabe durch Inhaber oder Rechtsberatung erforderlich",
          "Bis zur finalen Pruefung bleibt die Seite no-index",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Kontaktseite öffnen" }}
        secondaryCta={{ href: "/de/datenschutz", label: "Datenschutz ansehen", variant: "ghost" }}
      />

      <PageSection>
        <div className="rounded-[2rem] border border-amber-300/80 bg-amber-50 px-6 py-6 text-amber-950 shadow-[var(--shadow-soft)]">
          <p className="font-semibold">
            Rechtshinweis: Unternehmensdaten, Vertretung, Registerangaben und steuerliche Informationen duerfen nur nach Inhaber- oder Rechtsfreigabe veroeffentlicht werden.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Platzhalter zur Pruefung"
          title="Rechtliche Pflichtangaben werden erst nach Freigabe vollstaendig ausgegeben."
          description="Bis zur finalen Freigabe werden keine erfundenen Handelsregisterdaten, Umsatzsteuer-IDs oder Adressen eingetragen."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Anbieter</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{siteConfig.legal.companyName}</p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Vertreten durch</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {siteConfig.legal.representative || "Ausstehend - Inhaberfreigabe erforderlich"}
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Kontakt</h2>
            <div className="mt-3 space-y-1 text-sm leading-7 text-[color:var(--muted)]">
              <p>{siteConfig.phoneDisplay}</p>
              <p>{siteConfig.contactEmail}</p>
              <p>{siteConfig.legal.streetAddress || "Adresse ausstehend - Rechtsfreigabe erforderlich"}</p>
            </div>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Register- und Steuerdaten</h2>
            <div className="mt-3 space-y-1 text-sm leading-7 text-[color:var(--muted)]">
              <p>Handelsregister: {siteConfig.legal.tradeRegister || "Ausstehend"}</p>
              <p>Registernummer: {siteConfig.legal.tradeRegisterNumber || "Ausstehend"}</p>
              <p>USt-IdNr.: {siteConfig.legal.vatId || "Ausstehend"}</p>
            </div>
          </section>
        </div>
      </PageSection>
    </main>
  );
}
