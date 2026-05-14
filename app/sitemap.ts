import type { MetadataRoute } from "next";
import { languages } from "@/data/i18n/languages";

const base = "https://mr-spark.de";
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
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/"];

  for (const lang of languages) {
    for (const route of coreRoutes) {
      routes.push(`/${lang.code}${route}`);
    }
  }

  return routes.map((url) => ({
    url: `${base}${url}`,
  }));
}