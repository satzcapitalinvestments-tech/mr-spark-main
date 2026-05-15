import type { Metadata } from "next";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Elektriker anfragen",
  description:
    "Elektriker für Reparaturen, Fehlersuche, Steckdosen, Licht, Sicherungskasten und schnelle Hilfe bei Störungen.",
  pathname: "/de/elektriker",
  locale: "de",
  localizedSlug: "elektriker",
  includeLocaleAlternates: true,
  keywords: ["Elektriker buchen", "Elektriker Deutschland", "Elektro Reparatur"],
});

const cards = [
  {
    badge: "Reparatur",
    title: "Fehlersuche und Reparatur",
    description:
      "Ausfälle, FI-Probleme und unsichere Stromkreise können direkt als Diagnose- und Reparaturfall beschrieben werden.",
  },
  {
    badge: "Prüfung",
    title: "Sicherheitsprüfung",
    description:
      "Sichtprüfung, Messung und technische Einordnung helfen dabei, Risiken im Sicherungskasten oder an Leitungen früh zu erkennen.",
  },
  {
    badge: "Service",
    title: "Steckdosen, Schalter und Licht",
    description:
      "Kleinere Elektroarbeiten bleiben auffindbar und lassen sich genauso einfach anfragen wie größere Reparaturen.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Elektriker anfragen"
        title="Elektriker für Reparaturen, Fehlersuche und sichere Elektroarbeiten."
        description="Diese Seite richtet sich an Kunden, die schnell einen Elektriker für Reparatur, Prüfung, Steckdosen, Schalter oder einen defekten Sicherungskasten anfragen möchten."
        points={[
          "Fehlersuche und Sicherheit klar benannt",
          "Wohnungen, Häuser und Gewerbe im selben Servicebild",
          "Bei dringenden Fällen ist der Weg zum Notdienst sofort sichtbar",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Elektriker anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Zum Notdienst", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungsfokus"
          title="Typische Elektriker-Anliegen schnell einordnen."
          description="Kunden finden Reparatur, Prüfung und kleinere Elektroarbeiten schnell in der passenden Einordnung."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Elektriker-Einsatz direkt vorbereiten"
        description="Nennen Sie Ort, Aufgabe oder Fehlerbild und die passende Dringlichkeit. So kann die Anfrage schneller zur richtigen Rückmeldung führen."
        sourcePage="/de/elektriker"
        checklist={[
          "Ort oder Stadt nennen",
          "Fehler oder Aufgabe knapp beschreiben",
          "Telefon oder Telegram erreichbar halten",
        ]}
      />
    </main>
  );
}
