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
  title: "Elektriker buchen",
  description:
    "Elektriker fuer Fehlersuche, Reparatur, Sicherheitspruefung und Elektroservice in Deutschland.",
  pathname: "/de/elektriker",
  locale: "de",
  localizedSlug: "elektriker",
  includeLocaleAlternates: true,
  keywords: ["Elektriker buchen", "Elektriker Deutschland", "Elektro Reparatur"],
});

const cards = [
  {
    title: "Fehlersuche und Reparatur",
    description:
      "Ausfaelle, FI-Probleme und unsichere Stromkreise werden als konkrete Diagnose- und Reparaturfaelle sichtbar gemacht.",
  },
  {
    title: "Sicherheitspruefung",
    description:
      "Sichtpruefung, Messung und klare Handlungsempfehlungen bleiben fuer Wohnungen, Haeuser und Gewerbe gut auffindbar.",
  },
  {
    title: "Steckdosen, Licht und Sicherungskasten",
    description:
      "Auch klassische Elektriker-Arbeiten wie Steckdosen, Lichtinstallation oder Sicherungskasten bleiben direkt anfragbar.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Elektriker anfragen"
        title="Elektriker fuer Reparatur, Fehlersuche und sichere Elektroarbeiten."
        description="Mr Spark hilft bei Reparaturen, Diagnosen, Steckdosen, Schaltern, Lichtinstallation und pruefbaren Sicherheitsfragen fuer Wohnungen, Haeuser und Gewerbeobjekte."
        points={[
          "Fehlersuche und Sicherheit klar benannt",
          "Reparatur und Standardarbeiten gleich gut sichtbar",
          "24h Notdienst bei dringenden Stoerungen direkt erreichbar",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Elektriker anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungsfokus"
          title="Typische Elektriker-Anliegen bleiben schnell einordenbar."
          description="Die Seite hilft bei konkreter Suchintention, ohne sich in allgemeinen Handwerker-Floskeln zu verlieren."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Elektriker-Einsatz direkt vorbereiten"
        description="Beschreiben Sie Aufgabe, Ort und Dringlichkeit direkt hier und starten Sie die weitere Abstimmung ueber Telegram."
        sourcePage="/de/elektriker"
        checklist={[
          "Ort oder Stadt nennen",
          "Fehler oder Aufgabe knapp beschreiben",
          "Rueckruf oder Telegram erreichbar halten",
        ]}
      />
    </main>
  );
}
