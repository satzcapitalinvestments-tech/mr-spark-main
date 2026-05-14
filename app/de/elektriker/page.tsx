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
  title: "Elektriker buchen",
  description:
    "Elektriker für Fehlersuche, Reparatur, Sicherheitsprüfung und strukturierte Anfrageaufnahme in Deutschland.",
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
      "Ausfälle, FI-Probleme und unsichere Stromkreise werden als konkrete Diagnose- und Reparaturfälle formuliert statt nur als abstrakter Service.",
  },
  {
    title: "Sicherheitsprüfung",
    description:
      "Die Seite hält Sichtprüfung, Messung und Handlungsempfehlung auffindbar, ohne die Lead-Architektur vom Rest der Website abzukoppeln.",
  },
  {
    title: "Koordinierte Terminierung",
    description:
      "Auch Standardanfragen bleiben conversion-stark, weil Rückruf, Region und Dringlichkeit im selben Intake erfasst werden.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Elektriker anfragen"
        title="Die Elektriker-Route muss Kompetenz signalisieren, ohne in generische Handwerker-Rhetorik abzugleiten."
        description="Die Seite richtet sich an Nutzer mit klarer Kaufabsicht. Sie verdichtet Reparatur, Prüfung und Terminlogik auf dieselben strukturierten Kontaktpunkte wie der Rest des Auftritts."
        points={[
          "Fehlersuche und Sicherheit klar benannt",
          "Region und Dringlichkeit bleiben Teil des Flows",
          "Keine Trennung zwischen SEO-Seite und Lead-Aufnahme",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Elektriker anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Bei Notfall hier entlang", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungsfokus"
          title="Die Route ordnet typische Elektriker-Anliegen sauber ein."
          description="Sie hilft Nutzern mit konkreter Suchintention, ohne die Conversion mit überlangen Leistungslisten oder unscharfen Aussagen zu verwässern."
        />
        <FeatureGrid items={cards} />
      </PageSection>

      <LeadCaptureSection
        title="Elektriker-Einsatz direkt vorbereiten"
        description="Die Seite überführt Suchtraffic ohne Umwege in den bestehenden Leadflow. So bleiben Kontakt, Ort und Leistungsbild in derselben Datenstruktur."
        sourcePage="/de/elektriker"
        checklist={[
          "Ort oder Stadt nennen",
          "Fehler oder Aufgabe knapp beschreiben",
          "Rückruf oder Telegram erreichbar halten",
        ]}
      />
    </main>
  );
}
