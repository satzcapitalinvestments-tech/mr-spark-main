import type { MetadataRoute } from "next";
import { languages } from "@/data/i18n/languages";
import { hasPublishedLegalDetails, siteConfig } from "@/lib/site-config";

const legalRoutes = ["/impressum", "/datenschutz"];
const coreRoutes = [
  "",
  "/leistungen",
  "/elektriker",
  "/elektro",
  "/notdienst",
  "/einsatzgebiet",
  "/preise",
  "/kontakt",
  "/ueber-uns",
  ...(hasPublishedLegalDetails() ? legalRoutes : []),
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexingEnabled) {
    return [];
  }

  const routes = ["/"];

  for (const lang of languages) {
    for (const route of coreRoutes) {
      routes.push(`/${lang.code}${route}`);
    }
  }

  return routes.map((url) => ({
    url: `${siteConfig.siteUrl}${url}`,
  }));
}
