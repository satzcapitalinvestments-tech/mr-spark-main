import type { MetadataRoute } from "next";
import { languages } from "@/data/i18n/languages";
import { buildLocalizedPath, localizedRouteSlugs } from "@/lib/i18n";
import { hasPublishedLegalDetails, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexingEnabled) {
    return [];
  }

  const publicSlugs = hasPublishedLegalDetails()
    ? localizedRouteSlugs
    : localizedRouteSlugs.filter((slug) => slug !== "impressum" && slug !== "datenschutz");
  const routes = ["/"];

  for (const lang of languages) {
    routes.push(buildLocalizedPath(lang.code));

    for (const slug of publicSlugs) {
      routes.push(buildLocalizedPath(lang.code, slug));
    }
  }

  return routes.map((url) => ({
    url: `${siteConfig.siteUrl}${url}`,
  }));
}
