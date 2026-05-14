import type { Metadata } from "next";
import { germanCities } from "@/data/germany/cities";
import { germanStates } from "@/data/germany/states";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Einsatzgebiet in Deutschland",
  description:
    "Bundesländer, Städte und regionale Einsatzabdeckung für Elektroanfragen, Rückruf und Notdienstkoordination.",
  pathname: "/de/einsatzgebiet",
  locale: "de",
  localizedSlug: "einsatzgebiet",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Einsatzgebiet", "Elektroservice Deutschland", "Notdienst Regionen"],
});

const coverageCards = [
  {
    title: "Deutschlandweite Anfrageannahme",
    description:
      "Die Route schafft Klarheit darüber, dass Mr Spark Anfragen aus vielen Regionen koordiniert, Verfügbarkeit und Anfahrt aber immer vorab bestätigt.",
  },
  {
    title: "Saubere Erwartungssteuerung",
    description:
      "Statt falscher Sofort-Zusagen priorisiert die Seite Transparenz zu Rückmeldung, Terminfenster und tatsächlicher Einsatzplanung.",
  },
  {
    title: "Gleicher Leadflow wie auf den Kernseiten",
    description:
      "Auch die Gebietsseite führt in dieselbe servergestützte Intake-Strecke und verhindert damit Datenbrüche zwischen SEO-Einstieg und Kontakt.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Einsatzgebiet und Verfügbarkeit"
        title="Regionale Reichweite sichtbar machen, ohne operative Verfügbarkeit zu versprechen, die noch nicht bestätigt ist."
        description="Die Gebietsseite übersetzt Suchintention nach Städten und Regionen in einen klaren Kontaktpfad. Sie hält die Conversion konsistent und schützt gleichzeitig vor unpräzisen Leistungsversprechen."
        points={[
          "Bundesländer und Städte bleiben scanbar",
          "Anfahrt und Termin werden immer vorab bestätigt",
          "SEO-Landing und Lead-Intake laufen in dieselbe Architektur",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Einsatzgebiet anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Notdienst öffnen", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Gebietslogik"
          title="Die Route beantwortet zuerst Reichweite, dann Erreichbarkeit."
          description="Für Nutzer, die nach Städten oder Regionen suchen, muss die Seite schnell zeigen, dass Anfragen angenommen werden, ohne eine operative Zusage zu fingieren."
        />
        <FeatureGrid items={coverageCards} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Bundesländer"
          title="Regionen, aus denen Anfragen strukturiert koordiniert werden."
          description="Die finale Disposition hängt weiterhin von Verfügbarkeit, Anfahrt und Auftragslage ab. Genau diese Abhängigkeit bleibt in der UI bewusst sichtbar."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {germanStates.map((state) => (
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-slate-900" key={state}>
              {state}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Städte und Orte"
          title="Die wichtigsten Suchorte bleiben direkt erfassbar."
          description="Stadtbezogene Einstiege sollen nicht in einer losen Linkliste enden. Sie müssen auf dieselbe saubere Kontaktaufnahme zurückführen."
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
        title="Region und Einsatz jetzt strukturiert anfragen"
        description="Wer über eine Stadt- oder Regionssuche einsteigt, kann den Einsatzort sofort mitsenden. Das reduziert Rückfragen und hält die Disposition sauber."
        sourcePage="/de/einsatzgebiet"
        checklist={[
          "Ort oder Stadt direkt nennen",
          "Service oder Störung beschreiben",
          "Dringlichkeit und Rückkanal angeben",
        ]}
      />
    </main>
  );
}
