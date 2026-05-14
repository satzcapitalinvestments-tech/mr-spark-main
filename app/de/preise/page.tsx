import type { Metadata } from "next";
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
        title="Eine Preis-Seite, die Erwartungssteuerung leistet statt mit fiktiven Pauschalen zu arbeiten."
        description="Die Seite schafft Vertrauen über Kostenlogik, Beispielkontexte und sichtbare Sonderfälle wie Notdienstzuschläge."
        points={[
          "Preisblöcke bleiben voneinander getrennt",
          "Notdienstkosten werden nicht versteckt",
          "Die Conversion bleibt auch auf der Preisroute präsent",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Preisrelevante Anfrage stellen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Notdienst anfragen", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Kostenbausteine"
          title="Die Preisarchitektur erklärt, wofür Nutzer tatsächlich bezahlen."
          description="Das senkt Rückfragen und verhindert, dass der Leadflow mit Preisunsicherheit abbricht."
        />
        <FeatureGrid items={pricingPageContent.pillars} columns={2} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Einordnung"
          title="Beispielszenarien helfen bei der Erwartungsbildung, ohne falsche Preisgarantien auszusprechen."
          description="Die Inhalte bleiben bewusst qualitativ, bis das Unternehmen belastbare Preisspannen freigibt."
        />
        <FeatureGrid items={pricingPageContent.examples} columns={3} />
      </PageSection>

      <LeadCaptureSection
        title="Kostenrelevante Anfrage mit Kontext starten"
        description="Wer die Preisroute besucht, kann direkt mit Stadt, Leistungsbild und Dringlichkeit in den bestehenden Leadflow einsteigen."
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
