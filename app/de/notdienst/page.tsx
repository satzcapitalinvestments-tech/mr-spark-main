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
import VisualDepthSection from "@/components/VisualDepthSection";
import { emergencyPageContent } from "@/data/page-content/de";
import { buildEmergencyServiceStructuredData, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Elektro-Notdienst rund um die Uhr",
  description:
    "Soforthilfe bei Stromausfall, Kurzschluss, FI-Problemen, gefaehrlichen Steckdosen und defekten Sicherungskasten-Komponenten.",
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
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Notdienst anfragen" }}
        secondaryCta={{ href: "/de/preise", label: "Preise ansehen", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="emergency" />}
      />

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Sicherheitswarnung"
          description="Bei Brandgeruch, Funkenbildung oder akuter Gefahr sofort den Stromkreis abschalten und bei Gefahr Feuerwehr/Notruf kontaktieren."
        />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Typische Notfaelle"
          title="Diese Situationen sollten Sie im Elektro-Notdienst direkt benennen."
          description="Je klarer das Fehlerbild, desto schneller laesst sich der naechste Schritt fuer Rueckmeldung und Einsatz abstimmen."
        />
        <FeatureGrid items={emergencyPageContent.symptoms} columns={2} />
      </PageSection>

      <VisualDepthSection
        eyebrow="Vor Ort sichtbar"
        title="Notdienst, Diagnose und Absicherung muessen sofort glaubwuerdig wirken."
        description="Die Bildsprache staerkt das Vertrauen, ohne den Sicherheitsfokus oder die direkte Kontaktmoeglichkeit zu verlieren."
        variant="emergency"
      />

      <PageSection surface>
        <SectionHeading
          eyebrow="Ablauf im Notfall"
          title="Von der Gefahrensituation bis zur abgestimmten Hilfe in vier klaren Schritten."
          description="Der Kontaktweg bleibt auch in dringlichen Situationen einfach, direkt und gut erklaert."
        />
        <StepGrid steps={emergencyPageContent.steps} />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Preistransparenz"
          title="Auch im Notdienst bleiben Kostenbausteine nachvollziehbar."
          description="Anfahrt, Diagnose, Arbeitszeit und moegliche Zuschlaege werden offen erklaert, bevor Arbeiten starten."
        />
        <FeatureGrid items={emergencyPageContent.pricing} />
      </PageSection>

      <Faq items={emergencyPageContent.faq} />

      <LeadCaptureSection
        id="lead-form"
        title="Notdienstanfrage direkt an Mr Spark senden"
        description="Beschreiben Sie kurz, wo das Problem liegt und wie dringend Hilfe benoetigt wird. Wir bereiten die schnelle Rueckmeldung ueber Telegram vor."
        sourcePage="/de/notdienst"
        checklist={[
          "Stadt und Fehlerbild angeben",
          "Dringlichkeit korrekt markieren",
          "Telefon oder Telegram erreichbar halten",
        ]}
        emergencyNote="Bei Brandgeruch, Funkenbildung oder akuter Gefahr sofort den Stromkreis abschalten und bei Gefahr Feuerwehr/Notruf kontaktieren."
      />
    </main>
  );
}
