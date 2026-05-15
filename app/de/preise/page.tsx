import type { Metadata } from "next";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { pricingPageContent } from "@/data/page-content/de";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Preise und transparente Abrechnung",
  description:
    "Preisstruktur für Anfahrt, Diagnose, Arbeitszeit, Material und Notdienstzuschläge nachvollziehbar erklärt.",
  pathname: "/de/preise",
  locale: "de",
  localizedSlug: "preise",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Preise", "Notdienst Kosten", "Elektroinstallation Preis"],
});

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Preise und Transparenz"
        title="Preise und transparente Abrechnung fuer Elektroarbeiten."
        description="Die Preis-Seite erklaert Anfahrt, Diagnose, Arbeitszeit, Material und Notdienstzuschlaege nachvollziehbar, ohne mit fiktiven Festpreisen zu werben."
        points={[
          "Preisbloecke bleiben sauber voneinander getrennt",
          "Notdienstkosten werden offen benannt",
          "Rueckfragen zu Aufwand und Einsatzart lassen sich besser vorbereiten",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Preisrelevante Anfrage stellen" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="pricing" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Kostenbausteine"
          title="Diese Kostenpunkte beeinflussen die Elektrorechnung."
          description="So sehen Sie direkt, welche Bausteine bei Notdienst, Diagnose, Arbeitszeit und Material fuer die Preisabsprache relevant sind."
        />
        <FeatureGrid items={pricingPageContent.pillars} columns={2} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Einordnung"
          title="Beispielszenarien helfen bei der Einordnung, ohne falsche Preisgarantien zu geben."
          description="Die Inhalte bleiben bewusst qualitativ, bis belastbare Preisspannen fuer einzelne Leistungen freigegeben sind."
        />
        <FeatureGrid items={pricingPageContent.examples} columns={3} />
      </PageSection>

      <LeadCaptureSection
        title="Preisrelevante Anfrage mit Kontext starten"
        description="Wenn Sie Preisfragen haben, beschreiben Sie Einsatzort, Leistung und Dringlichkeit direkt hier und starten Sie die weitere Abstimmung ueber Telegram."
        sourcePage="/de/preise"
        checklist={[
          "Leistungsart nennen",
          "Einsatzort angeben",
          "Falls relevant Dringlichkeit markieren",
        ]}
      />
    </main>
  );
}
