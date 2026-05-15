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
    "Elektriker fuer Reparaturen, Fehlersuche, Steckdosen, Licht, Sicherungskasten und schnelle Hilfe bei Stoerungen.",
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
      "Ausfaelle, FI-Probleme und unsichere Stromkreise koennen direkt als Diagnose- und Reparaturfall beschrieben werden.",
  },
  {
    badge: "Pruefung",
    title: "Sicherheitspruefung",
    description:
      "Sichtpruefung, Messung und technische Einordnung helfen dabei, Risiken im Sicherungskasten oder an Leitungen frueh zu erkennen.",
  },
  {
    badge: "Service",
    title: "Steckdosen, Schalter und Licht",
    description:
      "Kleinere Elektroarbeiten bleiben auffindbar und lassen sich genauso einfach anfragen wie groessere Reparaturen.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Elektriker anfragen"
        title="Elektriker fuer Reparaturen, Fehlersuche und sichere Elektroarbeiten."
        description="Diese Seite richtet sich an Kunden, die schnell einen Elektriker fuer Reparatur, Pruefung, Steckdosen, Schalter oder einen defekten Sicherungskasten anfragen moechten."
        points={[
          "Fehlersuche und Sicherheit klar benannt",
          "Wohnungen, Haeuser und Gewerbe im selben Servicebild",
          "Bei dringenden Faellen ist der Weg zum Notdienst sofort sichtbar",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Elektriker anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Zum Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungsfokus"
          title="Typische Elektriker-Anliegen schnell einordnen."
          description="So bleibt die Route klar, hilfreich und konkret fuer Nutzer mit direkter Kaufabsicht."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Elektriker-Einsatz direkt vorbereiten"
        description="Nennen Sie Ort, Aufgabe oder Fehlerbild und die passende Dringlichkeit. So kann die Anfrage schneller zur richtigen Rueckmeldung fuehren."
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
