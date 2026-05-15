import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { contactPageContent } from "@/data/page-content/de";
import { buildContactPageStructuredData, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt und Anfrage",
  description:
    "Kontakt fuer Elektroanfragen, Rueckrufwunsch und Notdienst mit Telegram-first CTA und kundenfreundlicher Anfragefuehrung.",
  pathname: "/de/kontakt",
  locale: "de",
  localizedSlug: "kontakt",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Kontakt", "Telegram Elektriker", "Elektro Anfrage"],
});

export default function Page() {
  return (
    <main className="gradient">
      <StructuredData data={buildContactPageStructuredData()} />

      <HeroSection
        eyebrow="Kontakt und Anfrage"
        title="Anfrage direkt an Mr Spark senden"
        description="Ob Stoerung, Notdienst oder planbare Elektroarbeit: Auf der Kontaktseite senden Sie die wichtigsten Angaben sofort mit und starten den Telegram-Kontakt ohne Umwege."
        points={[
          "Telegram-first CTA fuer schnelle Rueckmeldung",
          "Name, Kontaktmethode, Stadt, Service und Dringlichkeit direkt erfassen",
          "Akute Faelle bleiben sichtbar priorisiert",
        ]}
        primaryCta={{ href: "#lead-form", label: "Ueber Telegram anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Zum Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="contact" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Kontakt mit Klarheit"
          title="Die Kontaktseite zeigt sofort, welche Angaben fuer eine schnelle Rueckmeldung wirklich helfen."
          description="Statt langer Einleitungstexte sehen Sie direkt, was fuer Rueckruf, Termin oder Notdienst wichtig ist."
        />
        <FeatureGrid items={contactPageContent.cards} />
      </PageSection>

      <LeadCaptureSection
        id="lead-form"
        title="Anfrage direkt an Mr Spark senden"
        description="Beschreiben Sie kurz Ihr Elektroproblem. Wir bereiten eine schnelle Rueckmeldung vor und leiten Ihre Anfrage ueber Telegram weiter."
        sourcePage="/de/kontakt"
        checklist={contactPageContent.checklist}
      />

      <PageSection surface>
        <SectionHeading
          eyebrow="Nach Ihrer Anfrage"
          title="So geht es nach dem Absenden weiter."
          description="Nach dem Absenden starten Telegram oder Rueckmeldung mit den wichtigsten Angaben, damit Termin, Notdienst oder weitere Fragen schneller abgestimmt werden koennen."
        />
      </PageSection>
    </main>
  );
}
