import type { Metadata } from "next";
import {
  HeroSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
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
        eyebrow="Rechtliche Pflichtangaben"
        title="Das Impressum nutzt jetzt dieselbe Seitenlogik wie die restlichen Public Routes, ohne den juristischen Inhalt zu verwässern."
        description="Die Route bleibt bewusst nüchtern, aber sie hängt nicht länger als Fremdkörper neben der übrigen Informationsarchitektur."
        points={[
          "Pflichtangaben bleiben schnell erfassbar",
          "No-index greift weiter bis zur finalen Rechtsfreigabe",
          "Die Route bleibt an dieselbe öffentliche Seitenarchitektur angeschlossen",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Kontaktseite öffnen" }}
        secondaryCta={{ href: "/de/datenschutz", label: "Datenschutz ansehen", variant: "ghost" }}
      />

      {!legalReady ? (
        <PageSection>
          <div className="rounded-[2rem] border border-amber-300/80 bg-amber-50 px-6 py-6 text-amber-950 shadow-[var(--shadow-soft)]">
            <p className="font-semibold">
            Hinweis: Dieses Impressum bleibt bis zur finalen Unternehmens- und Rechtsfreigabe bewusst unvollstaendig
            und wird nicht indexiert.
            </p>
          </div>
        </PageSection>
      ) : null}

      <PageSection>
        <SectionHeading
          eyebrow="Anbieterangaben"
          title="Die juristisch relevanten Blöcke bleiben getrennt und damit leichter prüfbar."
          description="Die Inhalte sind unverändert sachlich, werden jetzt aber in derselben Section-Architektur dargestellt wie die übrigen Seiten."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Anbieter</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{siteConfig.legal.companyName}</p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Vertreten durch</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              {siteConfig.legal.representative || "Ausstehend"}
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Kontakt</h2>
            <div className="mt-3 space-y-1 text-sm leading-7 text-[color:var(--muted)]">
              <p>{siteConfig.phoneDisplay}</p>
              <p>{siteConfig.contactEmail}</p>
              <p>
                {siteConfig.legal.streetAddress || "Adresse ausstehend"}
                {siteConfig.legal.streetAddress ? ", " : ""}
                {siteConfig.legal.postalCode || ""}
                {siteConfig.legal.postalCode ? " " : ""}
                {siteConfig.legal.city || ""}
              </p>
            </div>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Register und Steuerdaten</h2>
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
