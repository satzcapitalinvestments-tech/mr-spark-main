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
    "Serviceverstaendnis, Qualitaetsanspruch und kundenfreundliche Elektrokommunikation von Mr Spark im Ueberblick.",
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
      "Mr Spark steht fuer verlaessliche Elektrohilfe, freundliche Kommunikation und einen klaren naechsten Schritt bei Notdienst und Planung.",
  },
  {
    title: "Qualitaet und Transparenz",
    description:
      "Sorgfaeltige Ausfuehrung, nachvollziehbare Preisbausteine und klare Absprachen bleiben sichtbar und vertrauenswuerdig.",
  },
  {
    title: "Wohnungen, Haeuser und Gewerbe",
    description:
      "Die Marke verbindet akute Hilfe, Reparaturen und planbare Elektroarbeiten fuer private und gewerbliche Anliegen in Deutschland.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Über Mr Spark"
        title="Mr Spark steht fuer klare Elektrohilfe, schnelle Rueckmeldung und ein professionelles Auftreten."
        description="Ob Notdienst, Fehlersuche oder planbare Installation: Mr Spark verbindet handwerkliche Naehe, transparente Kommunikation und einen klaren Kontaktweg fuer Kunden in Deutschland."
        points={[
          "Serviceverstaendnis statt Floskeln",
          "Qualitaet und Transparenz explizit benannt",
          "Kontakt und Telegram bleiben direkt erreichbar",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Kontakt aufnehmen" }}
        secondaryCta={{ href: "/de/leistungen", label: "Leistungen ansehen", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="contact" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Markenkern"
          title="Vertrauen entsteht durch klare Leistungen, saubere Kommunikation und sichtbare Qualitaet."
          description="Auf der Ueber-uns-Seite geht es um den Eindruck, den Kunden von Mr Spark erwarten duerfen: professionell, freundlich und nachvollziehbar."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Direkten Kontakt jederzeit offenhalten"
        description="Auch von dieser Seite aus koennen Sie Ihr Elektroproblem direkt beschreiben und die weitere Abstimmung ueber Telegram starten."
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
