import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import Faq from "@/components/Faq";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  NoticeCard,
  PageSection,
  SectionHeading,
  StepGrid,
} from "@/components/MarketingSections";
import { emergencyPageContent } from "@/data/page-content/de";
import { buildEmergencyServiceStructuredData, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "24h Elektro-Notdienst",
  description:
    "Soforthilfe bei Stromausfall, Kurzschluss, FI-Problemen und gefaehrlichen Elektrostoerungen mit priorisierter Rueckmeldung.",
  pathname: "/de/notdienst",
  keywords: ["24h Elektro-Notdienst", "Stromausfall Hilfe", "Kurzschluss Elektriker"],
});

export default function Page() {
  return (
    <main className="gradient">
      <StructuredData data={buildEmergencyServiceStructuredData()} />

      <HeroSection
        eyebrow={emergencyPageContent.hero.eyebrow}
        title={emergencyPageContent.hero.title}
        description={emergencyPageContent.hero.description}
        points={emergencyPageContent.hero.points}
        primaryCta={{ href: "/de/kontakt", label: "Notfall jetzt melden" }}
        secondaryCta={{ href: "/de/preise", label: "Preislogik ansehen", variant: "ghost" }}
      />

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Sicherheitsregel vor jeder Anfrage"
          description="Bei Brandgeruch, Rauch, Funkenbildung oder unmittelbarer Gefahr den betroffenen Stromkreis abschalten, Personen absichern und im Ernstfall zusaetzlich Feuerwehr oder Notruf kontaktieren."
        />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Typische Notfälle"
          title="Diese Stoerungen sollten im Notdienstkontext sofort sichtbar einordenbar sein."
          description="Die Seite reduziert kognitive Last und lässt Nutzer nicht erst durch generische Marketingblöcke suchen."
        />
        <FeatureGrid items={emergencyPageContent.symptoms} columns={2} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Ablauf"
          title="Von der Gefahrensituation zur Rueckmeldung in vier klaren Schritten."
          description="Die Seitensemantik spiegelt die operative Reihenfolge wider: absichern, beschreiben, Rueckmeldung vorbereiten, Einsatz koordinieren."
        />
        <StepGrid steps={emergencyPageContent.steps} />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Preistransparenz"
          title="Auch im Notfall bleibt die Kostenlogik nachvollziehbar."
          description="Die UI vermeidet Billigsignale und erklärt stattdessen, welche Preisbausteine einen Soforteinsatz beeinflussen."
        />
        <FeatureGrid items={emergencyPageContent.pricing} />
      </PageSection>

      <Faq items={emergencyPageContent.faq} />

      <LeadCaptureSection
        title="Notdienstanfrage servergestützt vorbereiten"
        description="Der Leadflow uebergibt Quellseite und Dringlichkeit an den bestehenden Backend-Endpoint, bevor Telegram geoeffnet wird."
        sourcePage="/de/notdienst"
        checklist={[
          "Stadt und Fehlerbild angeben",
          "Dringlichkeit korrekt markieren",
          "Rueckruf möglich halten",
        ]}
        emergencyNote="Technisches Risiko: Ohne bestätigte Rufnummern- und Bereitschaftslogik bleibt diese Seite conversion-stark, operativ aber weiter auf manuelle Bearbeitung angewiesen."
      />
    </main>
  );
}
