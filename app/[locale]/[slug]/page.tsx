import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteContent,
  getLocalizedSlugTitle,
  localizedPageCopy,
} from "@/data/i18n/localized-pages";
import { germanCities } from "@/data/germany/cities";
import { germanStates } from "@/data/germany/states";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import {
  getLocaleDirection,
  isLocale,
  isLocalizedRouteSlug,
  localeCodes,
  localizedRouteSlugs,
} from "@/lib/i18n";
import { buildLocalizedPageMetadata } from "@/lib/seo";

type SlugParams = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return localeCodes
    .filter((locale) => locale !== "de")
    .flatMap((locale) => localizedRouteSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: SlugParams;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale === "de" || !isLocalizedRouteSlug(slug)) {
    return {};
  }

  const title = getLocalizedSlugTitle(locale, slug);
  const content = getLocalizedRouteContent(locale, slug);

  return buildLocalizedPageMetadata({
    locale,
    slug,
    title: `${title} | Mr Spark`,
    description: content.description,
    keywords: [title, ...localizedPageCopy[locale].home.services],
  });
}

export default async function LocaleSlugPage({ params }: { params: SlugParams }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "de" || !isLocalizedRouteSlug(slug)) return notFound();
  const content = getLocalizedRouteContent(locale, slug);

  return (
    <main className="gradient" dir={getLocaleDirection(locale)}>
      <HeroSection
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        points={content.points}
        primaryCta={{ href: `/${locale}/kontakt`, label: content.primaryCtaLabel }}
        secondaryCta={{ href: `/${locale}/notdienst`, label: content.secondaryCtaLabel, variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow={content.sectionEyebrow}
          title={content.sectionTitle}
          description={content.sectionDescription}
        />
        <FeatureGrid items={content.cards} columns={slug === "einsatzgebiet" ? 2 : 3} />
      </PageSection>

      {slug === "einsatzgebiet" ? (
        <PageSection surface>
          <SectionHeading
            eyebrow={content.serviceAreaStatesLabel}
            title={content.title}
            description={content.serviceAreaIntro}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {germanStates.map((state) => (
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-slate-900" key={state}>
                {state}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <p className="section-eyebrow">{content.serviceAreaCitiesLabel}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {germanCities.slice(0, 72).map((city) => (
                <div className="feature-card py-4" key={city}>
                  <p className="text-base font-medium text-[color:var(--ink)]">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>
      ) : null}

      <LeadCaptureSection
        title={content.leadTitle}
        description={content.leadDescription}
        sourcePage={`/${locale}/${slug}`}
        checklist={content.checklist}
      />
    </main>
  );
}
