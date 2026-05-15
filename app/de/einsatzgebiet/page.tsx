import type { Metadata } from "next";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import { germanCities } from "@/data/germany/cities";
import { germanStates } from "@/data/germany/states";
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
  title: "Einsatzgebiet: Elektriker & Elektro-Notdienst in Deutschland",
  description:
    "Mr Spark nimmt Elektroanfragen aus Deutschland entgegen und bestätigt Verfügbarkeit, Anfahrt und Termin vorab.",
  pathname: "/de/einsatzgebiet",
  locale: "de",
  localizedSlug: "einsatzgebiet",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Einsatzgebiet", "Elektroservice Deutschland", "Notdienst Regionen"],
});

const coverageCards = [
  {
    badge: "Region",
    title: "Deutschlandweite Anfrageannahme",
    description:
      "Wir nehmen Anfragen aus diesen Regionen entgegen und koordinieren passende Elektro-Hilfe je nach Verfügbarkeit.",
  },
  {
    badge: "Planung",
    title: "Verfügbarkeit vorab bestätigt",
    description:
      "Verfügbarkeit, Anfahrt und Termin werden vorab bestätigt, bevor ein Einsatz fest eingeplant wird.",
  },
  {
    badge: "Privat & Gewerbe",
    title: "Wohnungen, Häuser und Gewerbe",
    description:
      "Vom Elektro-Notdienst bis zur planbaren Installation bleibt der Kontaktweg für unterschiedliche Einsatzorte klar.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Einsatzgebiet und Verfügbarkeit"
        title="Einsatzgebiet: Elektriker & Elektro-Notdienst in Deutschland"
        description="Wir nehmen Anfragen aus diesen Regionen entgegen und koordinieren passende Elektro-Hilfe je nach Verfügbarkeit. Verfügbarkeit, Anfahrt und Termin werden vorab bestätigt."
        points={[
          "Bundesländer und Städte bleiben schnell scanbar",
          "Wohnung, Haus, Büro und Gewerbe können direkt angefragt werden",
          "Telegram-Kontakt startet ohne Umwege zur passenden Rückmeldung",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Verfügbarkeit anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Notdienst starten", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="coverage" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Regionale Orientierung"
          title="So wird Ihr Einsatzort für Elektrohilfe klar eingeordnet."
          description="Das Einsatzgebiet bleibt klar erklärt, ohne falsche Standortversprechen oder überladene Texte."
        />
        <FeatureGrid items={coverageCards} />
      </PageSection>

      <VisualDepthSection
        eyebrow="Region und Einsatz"
        title="Einsatzgebiet braucht neben Kartenlogik auch sichtbare Elektroarbeit und Markenpräsenz."
        description="So wirkt die Seite wie ein echter Elektroservice mit Reichweite und klarer Kontaktmöglichkeit."
        variant="coverage"
      />

      <PageSection surface>
        <SectionHeading
          eyebrow="Bundesländer"
          title="Aus diesen Regionen können Sie Ihre Anfrage direkt vorbereiten."
          description="Die genaue Einsatzplanung hängt von Verfügbarkeit, Anfahrt und Auftragslage ab und wird vorab abgestimmt."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {germanStates.map((state) => (
            <span
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[color:var(--ink)]"
              key={state}
            >
              {state}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Städte und Orte"
          title="Wichtige Städte und Suchorte bleiben direkt erfassbar."
          description="Wenn Sie über eine Stadt- oder Regionssuche kommen, können Sie den Einsatzort direkt mitsenden."
        />
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {germanCities.map((city) => (
            <div className="feature-card py-4" key={city}>
              <p className="text-base font-medium text-[color:var(--ink)]">{city}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <LeadCaptureSection
        id="lead-form"
        title="Verfügbarkeit für Ihren Ort anfragen"
        description="Teilen Sie Stadt, Region und Anliegen direkt mit. So lässt sich schneller klären, ob Rückruf, Termin oder Notdienst der richtige nächste Schritt ist."
        sourcePage="/de/einsatzgebiet"
        checklist={[
          "Ort oder Stadt direkt nennen",
          "Service oder Störung beschreiben",
          "Dringlichkeit und Kontaktweg angeben",
        ]}
      />
    </main>
  );
}
