import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";

type T = { title: string; lead: string; services: string[] };

export function LocalizedPage({
  t,
  locale,
  dir,
}: {
  t: T;
  locale: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <main dir={dir}>
      <HeroSection
        eyebrow={`Mr Spark · ${locale.toUpperCase()}`}
        title={t.title}
        description={t.lead}
        points={[
          "Mehrsprachige Erstinformationen mit identischem Leadflow",
          "Die deutsche Conversion-Architektur bleibt die gemeinsame Basis",
        ]}
        primaryCta={{ href: `/${locale}/kontakt`, label: "Kontakt aufnehmen" }}
        secondaryCta={{ href: `/${locale}/notdienst`, label: "Notdienst öffnen", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungsübersicht"
          title="Relevante Elektrothemen auf einen Blick"
          description="Die internationalen Seiten bleiben bewusst kompakter, nutzen aber dieselben Layout- und Conversion-Seams wie der deutsche Hauptauftritt."
        />
        <FeatureGrid
          items={t.services.map((service) => ({
            title: service,
            description:
              "Mr Spark koordiniert passende Elektrohilfe abhängig von Art des Problems und Region.",
          }))}
        />
      </PageSection>

      <LeadCaptureSection
        title="Anfrage strukturiert übermitteln"
        description="Name, Kontakt, Stadt, Service und Dringlichkeit gehen auch auf den Sprachrouten in dieselbe servergestützte Intake-Strecke."
        sourcePage={`/${locale}`}
        checklist={[
          "Stadt und Problem kurz nennen",
          "Dringlichkeit passend markieren",
          "Telegram oder Rueckruf erreichbar halten",
        ]}
      />
    </main>
  );
}
