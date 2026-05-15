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
    "Kontakt fuer Elektroanfragen, Rueckrufwunsch und Notdienstkoordination ueber den servergestuetzten Telegram-Leadflow.",
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
        title="Kontakt aufnehmen, Rückruf vorbereiten und den passenden Elektroservice direkt anfragen."
        description="Ob Störung, Notdienst oder planbare Arbeit: Über die Kontaktseite senden Sie die wichtigsten Einsatzdaten direkt mit und vermeiden unnötige Rückfragen."
        points={[
          "Telegram öffnet sich erst, wenn alle wichtigen Angaben vorbereitet sind",
          "Name, Stadt, Service und Dringlichkeit gehen direkt mit",
          "Akute Fälle bleiben auch hier klar priorisiert",
        ]}
        primaryCta={{ href: "#lead-form", label: "Anfrage starten" }}
        secondaryCta={{ href: "/de/notdienst", label: "Zum Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="home" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Was Nutzer sofort verstehen sollten"
          title="Die Kontaktseite zeigt, welche Angaben für eine schnelle Rückmeldung wirklich helfen."
          description="Statt langer Einleitungstexte sehen Sie direkt, was für Rückruf, Termin oder Notdienst wichtig ist."
        />
        <FeatureGrid items={contactPageContent.cards} />
      </PageSection>

      <LeadCaptureSection
        id="lead-form"
        title="Elektroanfrage jetzt vorbereiten"
        description="Die Formulardaten laufen in den bestehenden Lead-Endpoint und anschliessend in einen strukturierten Telegram-Kontakt."
        sourcePage="/de/kontakt"
        checklist={contactPageContent.checklist}
      />

      <PageSection surface>
        <SectionHeading
          eyebrow="Nach Ihrer Anfrage"
          title="So geht es nach dem Absenden weiter."
          description="Ihre Angaben werden vorbereitet und direkt in Telegram geöffnet. Dort kann die weitere Abstimmung zu Rückruf, Termin, Notdienst oder nächsten Schritten ohne Informationsverlust starten."
        />
      </PageSection>
    </main>
  );
}
