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
  title: "Über Mr Spark",
  description:
    "Warum Kunden Mr Spark für Elektroarbeiten, Notdienst und transparente Rückmeldungen anfragen.",
  pathname: "/de/ueber-uns",
  locale: "de",
  localizedSlug: "ueber-uns",
  includeLocaleAlternates: true,
  keywords: ["Über Mr Spark", "Elektriker Vertrauen", "Elektro Qualität"],
});

const cards = [
  {
    badge: "Verlässlichkeit",
    title: "Klare Kommunikation",
    description:
      "Kunden sollen schnell verstehen, welche Hilfe möglich ist und wie Rückmeldung, Termin oder Notdienst weiter abgestimmt werden.",
  },
  {
    badge: "Qualität",
    title: "Saubere Ausführung",
    description:
      "Elektroarbeiten, Diagnose und Sicherungstechnik brauchen Sorgfalt, Nachvollziehbarkeit und einen professionellen Auftritt.",
  },
  {
    badge: "Service",
    title: "Direkter Kontaktweg",
    description:
      "Telegram und die Kontaktseite bleiben sichtbar, damit aus Vertrauen direkt eine konkrete Anfrage werden kann.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Über Mr Spark"
        title="Warum Kunden Mr Spark für Elektroarbeiten und Notfälle anfragen."
        description="Mr Spark steht für einen klaren Kontaktweg, saubere Elektroarbeit und einen Auftritt, der Vertrauen schafft statt Fragen offen zu lassen."
        points={[
          "Verlässlicher Service für Wohnungen, Häuser und Gewerbe",
          "Transparente Rückmeldung statt unklarer Versprechen",
          "Direkter Weg zu Kontakt, Notdienst und Leistungen",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Kontakt aufnehmen" }}
        secondaryCta={{ href: "/de/leistungen", label: "Leistungen ansehen", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="contact" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Wofür Mr Spark steht"
          title="Vertrauen entsteht durch Klarheit, Erreichbarkeit und einen professionellen Serviceauftritt."
          description="Gerade bei Elektroarbeiten erwarten Kunden Sicherheit, zügige Rückmeldung und einen Service, der auf den Punkt kommt."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Direkten Kontakt direkt offenhalten"
        description="Auch von der Über-uns-Seite aus bleibt der Kontaktweg klar sichtbar, damit Vertrauen direkt in eine konkrete Anfrage übergehen kann."
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
