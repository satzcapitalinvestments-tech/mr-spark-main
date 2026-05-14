import type { Metadata } from "next";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Über Mr Spark",
  description:
    "Serviceverständnis, Qualitätsanspruch und strukturierte Anfrageführung von Mr Spark im Überblick.",
  pathname: "/de/ueber-uns",
  locale: "de",
  localizedSlug: "ueber-uns",
  includeLocaleAlternates: true,
  keywords: ["Über Mr Spark", "Elektriker Serviceverständnis", "Elektro Qualität"],
});

const cards = [
  {
    title: "Klare Service-Marke",
    description:
      "Die Marke muss Verlässlichkeit und operative Klarheit vermitteln, nicht nur Freundlichkeit oder generische Handwerker-Sprache.",
  },
  {
    title: "Qualität und Transparenz",
    description:
      "Sorgfältige Ausführung, nachvollziehbare Preislogik und strukturierte Kommunikation sind auf dieser Route explizit benannt.",
  },
  {
    title: "Technische Anschlussfähigkeit",
    description:
      "Die Seite bleibt mit denselben Kontakt- und CTA-Seams verbunden, damit Brand-Story und Lead-Infrastruktur nicht auseinanderlaufen.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Über Mr Spark"
        title="Die About-Route soll Vertrauen aufbauen, ohne sich vom operativen Anfrageziel zu entfernen."
        description="Diese Seite erklärt, wofür die Marke steht: klare Elektrokommunikation, saubere Preisführung und eine Nutzerführung, die Kontaktaufnahme nicht als Nebensache behandelt."
        points={[
          "Serviceverständnis statt Floskeln",
          "Qualität und Transparenz explizit benannt",
          "Brand-Erzählung bleibt an die Lead-Architektur gekoppelt",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Kontakt aufnehmen" }}
        secondaryCta={{ href: "/de/leistungen", label: "Leistungen ansehen", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Markenkern"
          title="Die Brand-Story muss die technische und operative Realität stützen."
          description="Gerade auf der Über-uns-Seite darf das Messaging nicht von den tatsächlichen Conversion- und Servicepfaden entkoppelt werden."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Direkten Kontakt trotz Brand-Seite offenhalten"
        description="Auch von der About-Route aus bleibt der Einstieg in denselben strukturierten Intake verfügbar. Das schützt vor toten Enden im Seitenfluss."
        sourcePage="/de/ueber-uns"
        checklist={[
          "Anliegen kurz benennen",
          "Ort und Erreichbarkeit angeben",
          "Bei Bedarf Dringlichkeit markieren",
        ]}
      />
    </main>
  );
}
