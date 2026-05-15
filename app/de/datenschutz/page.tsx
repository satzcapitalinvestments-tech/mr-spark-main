import type { Metadata } from "next";
import { HeroSection, PageSection, SectionHeading } from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";
import { hasPublishedLegalDetails } from "@/lib/site-config";

const legalReady = hasPublishedLegalDetails();

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise fuer Kontakt- und Serviceanfragen bei Mr Spark.",
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
        title="Datenschutzhinweise fuer Kontakt- und Serviceanfragen"
        description="Diese Seite beschreibt in knapper Form, welche Angaben bei Kontakt-, Notdienst- und Serviceanfragen verarbeitet werden und dass die endgueltige Fassung rechtlich freigegeben werden muss."
        points={[
          "Keine erfundenen Rechtsbehauptungen oder Verfahrensdetails",
          "Entwurf bis zur juristischen Freigabe",
          "Kontakt- und Anfragedaten nur so konkret wie noetig beschrieben",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Kontakt öffnen" }}
        secondaryCta={{ href: "/de/impressum", label: "Impressum ansehen", variant: "ghost" }}
      />

      <PageSection>
        <div className="rounded-[2rem] border border-[color:var(--line-strong)] bg-white px-6 py-6 shadow-[var(--shadow-soft)]">
          <p className="font-semibold text-[color:var(--ink)]">
            {!legalReady
              ? "Hinweis: Diese Datenschutzseite bleibt bis zur juristischen Freigabe ein rechtlicher Platzhalter und wird nicht indexiert."
              : "Diese Hinweise beschreiben in veroeffentlichungsreifer Form die Verarbeitung von Kontakt- und Serviceanfragen."}
          </p>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Ueberblick"
          title="Diese Punkte muessen im finalen Datenschutztext sauber geprueft werden."
          description="Bis zur Freigabe werden Datenkategorien, Zwecke und Weitergaben nur allgemein beschrieben, ohne unbestaetigte Einzelheiten zu erfinden."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Verarbeitete Daten</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Angaben wie Name, Kontaktmethode, Stadt, gewuenschter Service, Dringlichkeit und Nachricht aus Kontakt- oder Notdienstanfragen.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Zweck</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Rueckmeldung, Terminabstimmung, Priorisierung akuter Elektroprobleme sowie die Vorbereitung von Service- und Notdienstanfragen.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Weitergabe</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Endgueltige Hinweise zu externen Diensten, Auftragsverarbeitung und Speicherdauer muessen durch den Inhaber oder Rechtsberatung freigegeben werden.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Betroffenenrechte</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Auskunft, Berichtigung, Loeschung und weitere Rechte nach DSGVO muessen in der finalen Fassung mit den korrekten Kontaktdaten ergaenzt werden.
            </p>
          </section>
        </div>
      </PageSection>
    </main>
  );
}
