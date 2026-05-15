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
import { contactPageContent } from "@/data/page-content/de";
import { buildContactPageStructuredData, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt und Anfrage",
  description:
    "Kontakt fuer Elektroanfragen, Rueckruf, Notdienst und planbare Elektroarbeiten ueber einen klaren Telegram-Kontaktweg.",
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
        description="Ob Stoerung, Notdienst oder planbare Arbeit: Ueber die Kontaktseite senden Sie die wichtigsten Einsatzdaten direkt mit und starten die weitere Abstimmung ueber Telegram."
        points={[
          "Name, Stadt, Service und Dringlichkeit schnell uebermitteln",
          "Telegram bleibt der sichtbare Hauptkontakt fuer die weitere Abstimmung",
          "Akute Faelle und planbare Arbeiten nutzen denselben klaren Einstieg",
        ]}
        primaryCta={{ href: "#lead-form", label: "Jetzt ueber Telegram anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="contact" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Was fuer eine schnelle Rueckmeldung hilft"
          title="Die Kontaktseite zeigt direkt, welche Angaben wirklich wichtig sind."
          description="Statt technischer Erklaerungen sehen Nutzer sofort, wie sie die Anfrage klar und vollstaendig absenden."
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

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Bei akuter Gefahr zuerst absichern"
          description="Bei Brandgeruch, Funkenbildung oder sichtbaren Schaeden den betroffenen Stromkreis abschalten und bei Gefahr Feuerwehr oder Notruf kontaktieren."
        />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Nach Ihrer Anfrage"
          title="So geht es nach dem Absenden weiter."
          description="Mr Spark bereitet die Rueckmeldung vor, klaert Verfuegbarkeit und stimmt mit Ihnen die naechsten Schritte fuer Notdienst oder planbare Arbeit ab."
        />
      </PageSection>
    </main>
  );
}
