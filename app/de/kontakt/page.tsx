import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  NoticeCard,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import VisualDepthSection from "@/components/VisualDepthSection";
import { contactPageContent } from "@/data/page-content/de";
import { buildContactPageStructuredData, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt und Anfrage",
  description:
    "Kontakt für Elektroanfragen, Rückruf, Notdienst und planbare Elektroarbeiten über einen klaren Telegram-Kontaktweg.",
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
        title="Kontakt aufnehmen und Elektrohilfe direkt anfragen."
        description="Ob Störung, Notdienst oder planbare Arbeit: Über die Kontaktseite senden Sie die wichtigsten Einsatzdaten direkt mit und starten die weitere Abstimmung über Telegram."
        points={[
          "Name, Stadt, Service und Dringlichkeit schnell übermitteln",
          "Telegram bleibt der sichtbare Hauptkontakt für die weitere Abstimmung",
          "Akute Fälle und planbare Arbeiten nutzen denselben klaren Einstieg",
        ]}
        primaryCta={{ href: "#lead-form", label: "Jetzt über Telegram anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="contact" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Was für eine schnelle Rückmeldung hilft"
          title="Die Kontaktseite zeigt direkt, welche Angaben wirklich wichtig sind."
          description="Statt technischer Erklärungen sehen Nutzer sofort, wie sie die Anfrage klar und vollständig absenden."
        />
        <FeatureGrid items={contactPageContent.cards} />
      </PageSection>

      <VisualDepthSection
        eyebrow="Kontakt mit Substanz"
        title="Kontakt, Telegram und Vor-Ort-Eindruck sollen sich wie eine echte Marke anfühlen."
        description="Der Formularbereich wird von echten Elektro-Motiven getragen, damit der Kontaktweg nicht wie eine isolierte Technikbox wirkt."
        variant="contact"
      />

      <LeadCaptureSection
        id="lead-form"
        title="Anfrage direkt an Mr Spark senden"
        description="Beschreiben Sie kurz Ihr Elektroproblem. Wir bereiten eine schnelle Rückmeldung vor und leiten Ihre Anfrage über Telegram weiter."
        sourcePage="/de/kontakt"
        checklist={contactPageContent.checklist}
      />

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Bei akuter Gefahr zuerst absichern"
          description="Bei Brandgeruch, Funkenbildung oder sichtbaren Schäden den betroffenen Stromkreis abschalten und bei Gefahr Feuerwehr oder Notruf kontaktieren."
        />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Nach Ihrer Anfrage"
          title="So geht es nach dem Absenden weiter."
          description="Mr Spark bereitet die Rückmeldung vor, klärt Verfügbarkeit und stimmt mit Ihnen die nächsten Schritte für Notdienst oder planbare Arbeit ab."
        />
      </PageSection>
    </main>
  );
}
