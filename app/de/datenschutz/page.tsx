import type { Metadata } from "next";
import {
  HeroSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";
import { hasPublishedLegalDetails } from "@/lib/site-config";

const legalReady = hasPublishedLegalDetails();

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise fuer Lead Intake, Rueckrufe und Serviceabwicklung bei Mr Spark.",
  pathname: "/de/datenschutz",
  locale: "de",
  localizedSlug: "datenschutz",
  includeLocaleAlternates: true,
  noIndex: !legalReady,
});

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Datenschutz"
        title="Die Datenschutzroute bleibt sachlich, ist jetzt aber in dieselbe öffentliche Seitenarchitektur eingebettet."
        description="Das ist kein kosmetisches Detail: Rechtstexte dürfen nicht wie nachträgliche Anhänge wirken, wenn der restliche Auftritt bereits konsequent systematisiert wurde."
        points={[
          "Pflichttexte bleiben kompakt und scanbar",
          "No-index bleibt bis zur juristischen Freigabe aktiv",
          "Lead-Intake und Datenverarbeitung werden sichtbar miteinander verknüpft",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Kontakt öffnen" }}
        secondaryCta={{ href: "/de/impressum", label: "Impressum ansehen", variant: "ghost" }}
      />

      <PageSection>
        <div className="rounded-[2rem] border border-[color:var(--line-strong)] bg-white px-6 py-6 shadow-[var(--shadow-soft)]">
          <p className="font-semibold text-[color:var(--ink)]">
          {!legalReady
            ? "Hinweis: Diese Datenschutzseite ist bis zur juristischen Freigabe als Entwurf markiert und wird nicht indexiert."
            : "Diese Hinweise beschreiben die Verarbeitung von Kontakt- und Einsatzanfragen."}
          </p>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Verarbeitung und Zweck"
          title="Die wichtigsten Datenschutzblöcke bleiben getrennt, damit Rechts- und Technikprüfung sauber möglich ist."
          description="Gerade auf einer lead-orientierten Elektrikerseite muss klar bleiben, welche Daten in welcher Reihenfolge erfasst, validiert und weitergegeben werden."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Verarbeitete Daten</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Kontakt- und Anfragedaten aus Formular und Telegram, soweit zur Bearbeitung erforderlich.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Zweck</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Terminierung, Rueckruf, Priorisierung von Notfaellen und Angebots- bzw. Serviceabwicklung.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Speicher- und Weitergabepfade</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Formularanfragen werden serverseitig validiert und optional an ein konfiguriertes Intake-Ziel uebermittelt,
              bevor der Telegram-Kontakt geoeffnet wird.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Betroffenenrechte</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Auskunft, Berichtigung, Loeschung und weitere Rechte gemaess DSGVO.
            </p>
          </section>
        </div>
      </PageSection>
    </main>
  );
}
