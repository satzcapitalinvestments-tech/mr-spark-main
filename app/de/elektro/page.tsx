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
  title: "Elektroinstallation und Modernisierung",
  description:
    "Elektroinstallation, Modernisierung, Sicherungskasten, Steckdosen und Lichtarbeiten fuer Wohnungen und Gewerbe.",
  pathname: "/de/elektro",
  locale: "de",
  localizedSlug: "elektro",
  includeLocaleAlternates: true,
  keywords: ["Elektroinstallation", "Elektrik modernisieren", "Sicherungskasten"],
});

const cards = [
  {
    title: "Neuinstallation und Erweiterung",
    description:
      "Leitungen, Steckdosen, Lichtpunkte und neue Stromkreise werden als planbare Elektroarbeiten sauber differenziert.",
  },
  {
    title: "Sicherungskasten und Verteilung",
    description:
      "Verteiler, Schutzorgane und Modernisierungsbedarf bleiben sichtbar, weil sie kaufentscheidend und sicherheitsrelevant sind.",
  },
  {
    title: "Nachruestung im Bestand",
    description:
      "Bestehende Raeume, zusaetzliche Anschluesse und Umruestungen lassen sich sauber fuer Wohnung, Haus oder Gewerbe anfragen.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Elektroarbeiten und Modernisierung"
        title="Elektroinstallation, Modernisierung und Nachruestung klar erklaert."
        description="Mr Spark begleitet neue Stromkreise, Leitungen, Sicherungskasten, Beleuchtung und technische Modernisierung fuer Wohn- und Gewerbeobjekte."
        points={[
          "Planbare Leistungen werden konkret benannt",
          "Sicherheitsrelevante Themen bleiben auffindbar",
          "Kontakt, Preise und Telegram bleiben direkt erreichbar",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Elektroarbeit anfragen" }}
        secondaryCta={{ href: "/de/preise", label: "Preise ansehen", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungseinordnung"
          title="Die Route verbindet klaren Leistungsumfang mit schnellem Kontakt."
          description="Nutzer mit konkretem Installationsbedarf sollen sich schnell wiederfinden, ohne dass die Seite in unstrukturierte Leistungslisten kippt."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Geplante Elektroarbeit jetzt anfragen"
        description="Teilen Sie uns Ort, Art der Arbeit und Dringlichkeit direkt mit und starten Sie die weitere Abstimmung ueber Telegram."
        sourcePage="/de/elektro"
        checklist={[
          "Ort und Art der Arbeit nennen",
          "Bestand oder Neuinstallation kurz einordnen",
          "Wenn noetig Rueckrufwunsch ergaenzen",
        ]}
      />
    </main>
  );
}
