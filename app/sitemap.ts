import type { MetadataRoute } from "next";
const base = "https://mr-spark.de";
const routes = ["/", "/de", "/de/elektriker", "/de/elektro", "/de/notdienst", "/de/kontakt", "/de/preise", "/de/ueber-uns", "/de/impressum", "/de/datenschutz"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((url) => ({ url: `${base}${url}` })); }
