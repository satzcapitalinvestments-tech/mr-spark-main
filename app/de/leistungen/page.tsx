import type { Metadata } from "next";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { servicesPageContent } from "@/data/page-content/de";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Leistungen im Überblick",
  description:
    "Elektroinstallation, Fehlersuche, Sicherungskasten, Steckdosen, Licht und Elektro-Notdienst in einer konsistenten Seitenarchitektur.",
  pathname: "/de/leistungen",
  locale: "de",
  localizedSlug: "leistungen",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Leistungen", "Elektroinstallation", "Fehlersuche", "Notdienst"],
});

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Leistungsübersicht"
        title="Die Leistungsseite ordnet das Angebot sauber und hält gleichzeitig die Conversion-Seams stabil."
        description="Statt einer generischen Kartenwand zeigt die Seite, wie sich Installation, Diagnose, Notdienst und Modernisierung in eine gemeinsame Anfrageführung einordnen."
        points={[
          "Kernleistungen bleiben präzise und scanbar",
          "Kleinere Arbeiten verschwinden nicht hinter dem Notdienst-Fokus",
          "Jede Kategorie führt in denselben Intake-Flow",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Leistung anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Notdienst öffnen", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungskategorien"
          title="Elektroarbeiten, die Nutzer schnell einordnen können."
          description="Die Kategorien sind so formuliert, dass sowohl Suchintention als auch operative Weiterleitung profitieren."
        />
        <FeatureGrid items={servicesPageContent.categories} />
      </PageSection>

      <LeadCaptureSection
        title="Anfrage direkt aus der Leistungsseite starten"
        description="Nutzer müssen nicht erst zurück zur Startseite. Die Leistungsseite bietet denselben servergestützten Einstieg in die Anfrageaufnahme."
        sourcePage="/de/leistungen"
        checklist={[
          "Service konkret benennen",
          "Stadt angeben",
          "Dringlichkeit markieren",
        ]}
      />
    </main>
  );
}
