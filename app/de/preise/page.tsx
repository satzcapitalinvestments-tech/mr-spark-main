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
    "Preisstruktur fuer Anfahrt, Diagnose, Arbeitszeit, Material und Notdienstzuschlaege nachvollziehbar erklaert.",
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
        title="Preise fuer Elektriker, Notdienst und planbare Elektroarbeiten."
        description="Mr Spark arbeitet mit klar erklaerten Kostenbausteinen statt mit unrealistischen Lockpreisen. So lassen sich Anfahrt, Diagnose, Arbeitszeit und Material fair einordnen."
        points={[
          "Anfahrt und Einsatzzeit bleiben sichtbar",
          "Diagnose, Arbeitszeit und Material werden getrennt erklaert",
          "Notdienstzuschlaege werden offen benannt",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Preisrelevante Anfrage senden" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="pricing" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Kostenbausteine"
          title="So setzt sich ein Angebot fuer Elektroarbeiten zusammen."
          description="Die Preisroute schafft Vertrauen, weil sie nicht mit Fantasiepreisen arbeitet, sondern mit nachvollziehbaren Leistungsbausteinen."
        />
        <FeatureGrid items={pricingPageContent.pillars} columns={2} />
      </PageSection>

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
        description="Teilen Sie Stadt, Leistungsbild und Dringlichkeit direkt mit. So laesst sich schneller klaeren, welcher Einsatzumfang und welche Kostenbausteine relevant sind."
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
