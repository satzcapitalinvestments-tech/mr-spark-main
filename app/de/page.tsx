import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import Faq from "@/components/Faq";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  NoticeCard,
  PageSection,
  SectionHeading,
  StatsBand,
  StepGrid,
} from "@/components/MarketingSections";
import { germanStates } from "@/data/germany/states";
import { homePageContent } from "@/data/page-content/de";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Elektriker & Elektro-Notdienst in Deutschland",
  description:
    "Mr Spark hilft bei Stromausfall, Kurzschluss, FI-Problemen, Sicherungskasten, Steckdosen, Lichtinstallation und planbaren Elektroarbeiten.",
  pathname: "/de",
  locale: "de",
  localizedSlug: "",
  includeLocaleAlternates: true,
  keywords: [
    "Elektriker Deutschland",
    "Elektro-Notdienst",
    "Elektroinstallation",
    "Stromausfall Hilfe",
  ],
});

const emergencyHighlights = [
  {
    badge: "Notfall",
    title: "24h Elektro-Notdienst",
    description:
      "Stromausfall, Kurzschluss, FI-Auslösung, Brandgeruch und gefährliche Steckdosen sofort sichtbar anfragen.",
  },
  {
    badge: "Sicherheit",
    title: "Sicherungskasten & Fehlersuche",
    description:
      "Defekte Automaten, Unterverteilungen und wiederkehrende Störungen mit klarer Einordnung für den nächsten Schritt.",
  },
  {
    badge: "Kontakt",
    title: "Telegram direkt starten",
    description:
      "Kontaktweg und Rückmeldung bleiben oben auf der Seite präsent, damit die Anfrage ohne Umwege beginnt.",
  },
  {
    badge: "Leistung",
    title: "Planbare Elektroarbeiten",
    description:
      "Steckdosen, Schalter, Licht und Modernisierung stehen neben dem Notdienst gleichwertig und verständlich im Angebot.",
  },
];

const coverageHighlights = [
  {
    badge: "Region",
    title: "Deutschlandweite Anfrageannahme",
    description:
      "Mr Spark nimmt Elektroanfragen aus vielen Regionen entgegen und bestätigt Verfügbarkeit, Anfahrt und Termin vorab.",
  },
  {
    badge: "Wohnung & Gewerbe",
    title: "Einsätze für Privat und Gewerbe",
    description:
      "Vom Wohnungsnotfall bis zur planbaren Gewerbeinstallation bleibt der Einstieg klar und kundenfreundlich.",
  },
  {
    badge: "Telegram",
    title: "Kontaktweg ohne Umwege",
    description:
      "Stadt, Service und Dringlichkeit können direkt mitgeschickt werden, damit Rückfragen nicht bei null beginnen.",
  },
];

export default function Page() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: `${siteConfig.siteUrl}/de`,
    inLanguage: "de-DE",
  };

  return (
    <main className="gradient">
      <StructuredData data={websiteStructuredData} />

      <HeroSection
        eyebrow={homePageContent.hero.eyebrow}
        title={homePageContent.hero.title}
        description={homePageContent.hero.description}
        points={homePageContent.hero.points}
        primaryCta={{ href: "/de/notdienst", label: "Notdienst anfragen" }}
        secondaryCta={{ href: "/de/kontakt#lead-form", label: "Telegram starten", variant: "secondary" }}
        supportingCtas={[
          { href: "/de/preise", label: "Preise ansehen", variant: "ghost" },
          { href: "/de/einsatzgebiet", label: "Einsatzgebiet prüfen", variant: "ghost" },
        ]}
        stats={homePageContent.hero.stats}
        aside={<ElectricalPhotoShowcase variant="home" />}
      />

      <StatsBand items={homePageContent.trustBadges} />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungen im Überblick"
          title="Von Notdienst bis Neuinstallation finden Sie schnell die passende Elektrohilfe."
          description="Alle wichtigen Leistungen, Kontaktwege und Preisinfos bleiben auf einen Blick erreichbar."
        />
        <FeatureGrid items={homePageContent.services} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Schnelle Orientierung"
          title="Akute Störungen, Kontaktweg und wichtige Leistungen sind ohne langes Scrollen sichtbar."
          description="So bleibt der Einstieg stark, vertrauenswürdig und sofort auf echte Elektrohilfe ausgerichtet."
        />
        <FeatureGrid items={emergencyHighlights} columns={2} />
      </PageSection>

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Bei akuter Gefahr zuerst absichern"
          description="Bei Brandgeruch, Funkenbildung oder einem beschädigten Sicherungskasten möglichst den betroffenen Stromkreis abschalten und Personen schützen. Danach den Elektro-Notdienst anfragen."
        />
      </PageSection>

      <LeadCaptureSection
        id="lead-form"
        title="Anfrage direkt an Mr Spark senden"
        description="Beschreiben Sie kurz Ihr Elektroproblem. Wir bereiten eine schnelle Rückmeldung vor und leiten Ihre Anfrage über Telegram weiter."
        sourcePage="/de"
        checklist={[
          "Name und Kontaktmöglichkeit angeben",
          "Stadt, Service und Dringlichkeit auswählen",
          "Problem oder Arbeit kurz beschreiben",
        ]}
      />

      <PageSection surface>
        <SectionHeading
          eyebrow="So funktioniert es"
          title="Vom ersten Kontakt bis zum abgestimmten Einsatz in vier klaren Schritten."
          description="Ob Notdienst oder planbare Elektroarbeit: Die nächsten Schritte bleiben nachvollziehbar und kundenfreundlich."
        />
        <StepGrid steps={homePageContent.steps} />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Preise & Transparenz"
          title="Anfahrt, Diagnose, Arbeitszeit und Material werden offen erklärt."
          description="Statt unrealistischer Lockpreise sehen Sie direkt, aus welchen Bausteinen sich ein Einsatz zusammensetzt."
        />
        <FeatureGrid items={homePageContent.pricingCards} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Einsatzgebiet"
          title="Elektroanfragen aus Deutschland lassen sich direkt vorbereiten."
          description="Verfügbarkeit, Anfahrt und Termin werden vorab bestätigt. Das gilt für Großstädte genauso wie für Umland und Gewerbestandorte."
        />
        <FeatureGrid items={coverageHighlights} />
        <div className="mt-8 flex flex-wrap gap-2">
          {germanStates.slice(0, 10).map((state) => (
            <span
              key={state}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[color:var(--ink)]"
            >
              {state}
            </span>
          ))}
        </div>
      </PageSection>

      <Faq items={homePageContent.faq} />
    </main>
  );
}
