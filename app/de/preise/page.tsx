import type { Metadata } from "next";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import VisualDepthSection from "@/components/VisualDepthSection";
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
        title="Preise für Elektriker, Notdienst und planbare Elektroarbeiten."
        description="Mr Spark arbeitet mit klar erklärten Kostenbausteinen statt mit unrealistischen Lockpreisen. So lassen sich Anfahrt, Diagnose, Arbeitszeit und Material fair einordnen."
        points={[
          "Anfahrt und Einsatzzeit bleiben sichtbar",
          "Diagnose, Arbeitszeit und Material werden getrennt erklärt",
          "Notdienstzuschläge werden offen benannt",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Preisrelevante Anfrage senden" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="pricing" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Kostenbausteine"
          title="So setzt sich ein Angebot für Elektroarbeiten zusammen."
          description="Nachvollziehbare Kostenbausteine schaffen Vertrauen schon vor dem ersten Termin."
        />
        <FeatureGrid items={pricingPageContent.pillars} columns={2} />
      </PageSection>

      <VisualDepthSection
        eyebrow="Preisbild"
        title="Preise wirken vertrauenswürdiger, wenn reale Elektroarbeit und saubere Markenflächen zusammenkommen."
        description="Die Preisübersicht bleibt klar, gut lesbar und nah an echten Elektroeinsätzen."
        variant="pricing"
      />

      <PageSection surface>
        <SectionHeading
          eyebrow="Einordnung"
          title="Beispielszenarien helfen bei der Erwartungsbildung."
          description="Die Beispiele bleiben bewusst allgemein, bis belastbare Preisspannen durch den Inhaber freigegeben sind."
        />
        <FeatureGrid items={pricingPageContent.examples} columns={3} />
      </PageSection>

      <LeadCaptureSection
        title="Kostenrelevante Anfrage mit Kontext starten"
        description="Teilen Sie Stadt, Leistungsbild und Dringlichkeit direkt mit. So lässt sich schneller klären, welcher Einsatzumfang und welche Kostenbausteine relevant sind."
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
