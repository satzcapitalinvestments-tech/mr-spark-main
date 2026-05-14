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
  title: "Elektroinstallation und Modernisierung",
  description:
    "Elektroinstallation, Modernisierung, Sicherungskasten, Steckdosen und Lichtarbeiten in konsistenter Lead-Architektur.",
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
    title: "Nachrüstung im Bestand",
    description:
      "Bestehende Räume, zusätzliche Anschlüsse und Umrüstungen führen nicht in Sonderflows, sondern in denselben strukturierten Kontaktpfad.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Elektroarbeiten und Modernisierung"
        title="Die Elektro-Route muss geplante Arbeiten präzise benennen und gleichzeitig conversion-stark bleiben."
        description="Statt einer groben Sammelseite zeigt diese Route, wie Installation, Modernisierung und Nachrüstung in den gemeinsamen Anfrage- und Rückmeldeprozess eingebettet sind."
        points={[
          "Planbare Leistungen werden konkret benannt",
          "Sicherheitsrelevante Themen bleiben auffindbar",
          "Der Intake-Flow bleibt identisch zu Startseite und Kontakt",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Elektroarbeit anfragen" }}
        secondaryCta={{ href: "/de/preise", label: "Preislogik ansehen", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungseinordnung"
          title="Die Route reduziert Reibung zwischen Suchintention und Kontaktaufnahme."
          description="Nutzer mit konkretem Installationsbedarf sollen sich schnell wiederfinden, ohne dass die Seite in unstrukturierte Leistungsauflistungen kippt."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Geplante Elektroarbeit jetzt strukturiert starten"
        description="Auch planbare Arbeiten nutzen denselben Leadflow. Das hält Backend, Tracking und operative Übergabe konsistent."
        sourcePage="/de/elektro"
        checklist={[
          "Ort und Art der Arbeit nennen",
          "Bestand oder Neuinstallation kurz einordnen",
          "Wenn nötig Rückrufwunsch ergänzen",
        ]}
      />
    </main>
  );
}
