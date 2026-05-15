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
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Elektroinstallation und Modernisierung",
  description:
    "Elektroinstallation, Modernisierung, neue Stromkreise, Sicherungskasten und Lichtarbeiten für Wohn- und Gewerbeobjekte.",
  pathname: "/de/elektro",
  locale: "de",
  localizedSlug: "elektro",
  includeLocaleAlternates: true,
  keywords: ["Elektroinstallation", "Elektrik modernisieren", "Sicherungskasten"],
});

const cards = [
  {
    badge: "Installation",
    title: "Neuinstallation und Erweiterung",
    description:
      "Leitungen, Steckdosen, Lichtpunkte und neue Stromkreise können als planbare Elektroarbeiten sauber beschrieben werden.",
  },
  {
    badge: "Bestand",
    title: "Sicherungskasten und Verteilung",
    description:
      "Verteiler, Schutzorgane und Modernisierungsbedarf bleiben sichtbar, weil sie sicherheitsrelevant und oft entscheidend für das Projekt sind.",
  },
  {
    badge: "Modernisierung",
    title: "Nachrüstung im Bestand",
    description:
      "Zusätzliche Anschlüsse, neue Schalterprogramme, Smart-Home-Vorbereitung und Lichtkonzepte lassen sich direkt anfragen.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Elektroarbeiten und Modernisierung"
        title="Elektroinstallation, Modernisierung und saubere Nachrüstung."
        description="Planbare Elektroarbeiten brauchen klare Leistungsbeschreibung, sichere Ausführung und einen direkten Kontaktweg. Genau darauf ist diese Seite ausgerichtet."
        points={[
          "Planbare Leistungen werden konkret benannt",
          "Sicherheitsrelevante Themen bleiben auffindbar",
          "Telegram-Kontakt führt ohne Umwege zur passenden Rückmeldung",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Elektroarbeit anfragen" }}
        secondaryCta={{ href: "/de/preise", label: "Preise ansehen", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungseinordnung"
          title="Diese Elektroarbeiten können Sie direkt vorbereiten."
          description="Leistungen für Installation, Erweiterung und Nachrüstung bleiben schnell erfassbar."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <VisualDepthSection
        eyebrow="Modernisierung sichtbar"
        title="Installation und Nachrüstung sollen sofort wie saubere Elektroarbeit wirken."
        description="Schaltschrank, Messung und Montage bleiben sichtbar und geben der Seite mehr Vertrauen und Tiefe."
        variant="services"
      />

      <LeadCaptureSection
        title="Geplante Elektroarbeit jetzt anfragen"
        description="Nennen Sie Ort, Art der Arbeit und gewünschten Zeitraum. So kann Mr Spark Rückmeldung, Termin oder Vor-Ort-Termin passend vorbereiten."
        sourcePage="/de/elektro"
        checklist={[
          "Ort und Art der Arbeit nennen",
          "Bestand oder Neuinstallation kurz einordnen",
          "Bei Bedarf Dringlichkeit oder Terminwunsch ergänzen",
        ]}
      />
    </main>
  );
}
