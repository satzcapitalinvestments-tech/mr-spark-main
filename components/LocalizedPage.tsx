import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import VisualDepthSection from "@/components/VisualDepthSection";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
  StatsBand,
} from "@/components/MarketingSections";
import type { LocaleCode } from "@/data/i18n/languages";
import { localizedSlugLabels } from "@/data/i18n/localized-pages";
import { buildLocalizedPath, getLocaleLanguageTag } from "@/lib/i18n";

type T = {
  title: string;
  lead: string;
  eyebrow: string;
  services: string[];
  points: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesDescription: string;
  serviceCardDescription: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  leadTitle: string;
  leadDescription: string;
  checklist: string[];
};

export function LocalizedPage({
  t,
  locale,
  dir,
}: {
  t: T;
  locale: LocaleCode;
  dir?: "ltr" | "rtl";
}) {
  const routeLabels =
    locale !== "de" ? localizedSlugLabels[locale as Exclude<LocaleCode, "de">] : null;
  const trustItems = [...t.points, ...t.checklist].slice(0, 4);

  return (
    <main className="gradient" lang={getLocaleLanguageTag(locale)} dir={dir}>
      <HeroSection
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.lead}
        points={t.points}
        primaryCta={{ href: "#lead-form", label: t.primaryCtaLabel }}
        secondaryCta={{
          href: buildLocalizedPath(locale, "notdienst"),
          label: t.secondaryCtaLabel,
          variant: "secondary",
        }}
        supportingCtas={
          routeLabels
            ? [
                { href: buildLocalizedPath(locale, "preise"), label: routeLabels.preise, variant: "ghost" },
                {
                  href: buildLocalizedPath(locale, "einsatzgebiet"),
                  label: routeLabels.einsatzgebiet,
                  variant: "ghost",
                },
              ]
            : []
        }
        aside={<ElectricalPhotoShowcase variant="home" />}
      />

      <StatsBand items={trustItems} />

      <PageSection>
        <SectionHeading
          eyebrow={t.servicesEyebrow}
          title={t.servicesTitle}
          description={t.servicesDescription}
        />
        <FeatureGrid
          items={t.services.map((service) => ({
            title: service,
            description: t.serviceCardDescription,
          }))}
        />
      </PageSection>

      <VisualDepthSection
        eyebrow={t.servicesEyebrow}
        title={t.servicesTitle}
        description={t.servicesDescription}
        variant="home"
      />

      <LeadCaptureSection
        id="lead-form"
        title={t.leadTitle}
        description={t.leadDescription}
        sourcePage={buildLocalizedPath(locale)}
        checklist={t.checklist}
      />
    </main>
  );
}
