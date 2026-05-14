import type { MetadataRoute } from "next";
import { languages } from "@/data/i18n/languages";
const base="https://mr-spark.de";
const cores=["","/leistungen","/elektriker","/elektro","/notdienst","/einsatzgebiet","/preise","/kontakt","/ueber-uns","/impressum","/datenschutz"];
export default function sitemap(): MetadataRoute.Sitemap { const routes=["/"]; for(const l of languages){for(const c of cores){routes.push(`/${l.code}${c}`)}} return routes.map((url)=>({url:`${base}${url}`})); }
