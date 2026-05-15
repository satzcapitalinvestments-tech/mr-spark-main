import type { Metadata } from "next";
import { HeroSection, PageSection, SectionHeading } from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";
import { hasPublishedLegalDetails } from "@/lib/site-config";

const legalReady = hasPublishedLegalDetails();

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise fuer Kontaktanfragen, Telegram-Kommunikation und Serviceabwicklung bei Mr Spark.",
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
        title="Datenschutz in rechtlicher Pruefung"
        description="Diese Hinweise beschreiben, wie Kontakt- und Serviceanfragen verarbeitet werden. Finale rechtliche Details bleiben bis zur Freigabe als Entwurf markiert."
        points={[
          "Kontakt- und Telegram-Anfragen werden nur zur Bearbeitung genutzt",
          "No-index bleibt bis zur juristischen Freigabe aktiv",
          "Pflichtangaben werden ohne erfundene Details nachgetragen",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Kontakt oeffnen" }}
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
          title="Die wichtigsten Datenschutzpunkte bleiben uebersichtlich getrennt."
          description="So koennen Inhaber, Rechtsberatung und Kunden schnell nachvollziehen, welche Daten fuer Kontaktaufnahme, Terminabstimmung und Serviceabwicklung genutzt werden."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Verarbeitete Daten</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Kontakt- und Anfragedaten aus Formular und Telegram, soweit sie fuer Rueckmeldung, Terminabstimmung und Serviceabwicklung erforderlich sind.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Zweck</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Rueckmeldung, Priorisierung von Notfaellen, Terminierung sowie Vorbereitung und Durchfuehrung angefragter Elektroarbeiten.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Speicherung und Weitergabe</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Kontaktanfragen werden verarbeitet, damit Mr Spark reagieren und die weitere Abstimmung ueber den gewaehlten Kontaktweg fortsetzen kann.
            </p>
          </section>
          <section className="feature-card">
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">Betroffenenrechte</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
              Auskunft, Berichtigung, Loeschung und weitere Rechte gemaess DSGVO bleiben selbstverstaendlich unberuehrt.
            </p>
          </section>
        </div>
      </PageSection>
    </main>
  );
}
