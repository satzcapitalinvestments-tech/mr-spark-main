import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { localizedHomePageCopy } from "@/data/i18n/localized-pages";
import { LocalizedPage } from "@/components/LocalizedPage";
import {
  getLocaleDirection,
  isLocale,
  localeCodes,
} from "@/lib/i18n";
import { buildLocalizedPageMetadata } from "@/lib/seo";

type LocaleParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return localeCodes.filter((locale) => locale !== "de").map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "de") {
    return {};
  }

  const content = localizedHomePageCopy[locale];
  return buildLocalizedPageMetadata({
    locale,
    title: content.title,
    description: content.lead,
    keywords: content.services,
  });
}

export default async function LocalePage({ params }: { params: LocaleParams }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "de") return notFound();
  const t = localizedHomePageCopy[locale];
  return <LocalizedPage t={t} locale={locale} dir={getLocaleDirection(locale)} />;
}
