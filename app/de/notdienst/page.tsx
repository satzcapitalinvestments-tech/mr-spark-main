import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
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
  locale: "de",
  localizedSlug: "notdienst",
  includeLocaleAlternates: true,
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
        aside={<ElectricalPhotoShowcase variant="emergency" />}
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
          title="Diese Störungen sollten im Notdienst sofort erkennbar und benennbar sein."
          description="Sie müssen bei einem Notfall nicht erst suchen, wie Sie das Problem beschreiben sollen. Die häufigsten Fälle sind hier direkt sichtbar."
        />
        <FeatureGrid items={emergencyPageContent.symptoms} columns={2} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Ablauf"
          title="Von der Gefahrensituation bis zur Rückmeldung in vier klaren Schritten."
          description="Erst absichern, dann kurz beschreiben, anschließend Rückmeldung vorbereiten und den Einsatz abstimmen."
        />
        <StepGrid steps={emergencyPageContent.steps} />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Preistransparenz"
          title="Auch im Notfall bleiben Anfahrt, Diagnose und Zuschläge nachvollziehbar."
          description="Die Seite vermeidet Lockpreise und erklärt stattdessen, welche Faktoren einen Soforteinsatz beeinflussen."
        />
        <FeatureGrid items={emergencyPageContent.pricing} />
      </PageSection>

      <Faq items={emergencyPageContent.faq} />

      <LeadCaptureSection
        title="Notdienstanfrage jetzt direkt vorbereiten"
        description="Senden Sie Stadt, Fehlerbild und Dringlichkeit direkt mit. Danach öffnet sich Telegram für die schnelle weitere Abstimmung."
        sourcePage="/de/notdienst"
        checklist={[
          "Stadt und Fehlerbild angeben",
          "Dringlichkeit korrekt markieren",
          "Rueckruf möglich halten",
        ]}
        emergencyNote="Bei Rauch, Brandgeruch oder unmittelbarer Gefahr bitte zuerst absichern und im Ernstfall zusätzlich Feuerwehr oder Notruf kontaktieren."
      />
    </main>
  );
}
