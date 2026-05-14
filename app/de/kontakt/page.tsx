import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
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
        title="Eine Kontaktseite, die direkte Anfrageaufnahme priorisiert statt nur Erreichbarkeit aufzuzählen."
        description="Die Kontaktseite nutzt denselben Leadflow wie Startseite und Notdienst, gibt dem Nutzer aber mehr Orientierung dazu, welche Informationen für eine schnelle Rueckmeldung wirklich gebraucht werden."
        points={[
          "Servergestuetzter Intake vor dem Telegram-Handoff",
          "Eine klare Datenstruktur statt freiem Chat ohne Kontext",
          "Akute Faelle bleiben auch hier sichtbar priorisiert",
        ]}
        primaryCta={{ href: "#lead-form", label: "Anfrage starten" }}
        secondaryCta={{ href: "/de/notdienst", label: "Zum Notdienst", variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Was Nutzer sofort verstehen sollten"
          title="Die Kontaktseite erklärt den Kanal, ohne die Anfrage unnötig auszubremsen."
          description="Statt langer Einleitungstexte zeigt sie, welche Informationen die operative Bearbeitung tatsächlich beschleunigen."
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
          eyebrow="CTO-Hinweis"
          title="Die UI ist bereit für weitere Kanäle, die operative Rückführung noch nicht."
          description="Die Kontaktseite kapselt CTA-Platzierung und Formstruktur bereits sauber. Für zusätzliche Kanäle wie E-Mail, CRM oder Dispatch-Dashboard fehlt aber noch die finale Backend- und Business-Entscheidung."
        />
      </PageSection>
    </main>
  );
}
