"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { LocaleCode } from "@/data/i18n/languages";
import { defaultLocale, isLocale } from "@/lib/i18n";

type MascotHeroProps = {
  compact?: boolean;
  className?: string;
};

const mascotAltByLocale: Record<LocaleCode, string> = {
  de: "Mr Spark Maskottchen mit Helm und Werkzeug",
  en: "Mr Spark mascot with helmet and tools",
  tr: "Baretli ve aletli Mr Spark maskotu",
  ar: "تميمة Mr Spark بخوذة وأدوات",
  ru: "Талисман Mr Spark в каске и с инструментами",
  pl: "Maskotka Mr Spark w kasku z narzędziami",
  uk: "Талісман Mr Spark у касці та з інструментами",
  ro: "Mascota Mr Spark cu cască și unelte",
};

export default function MascotHero({ compact = false, className = "" }: MascotHeroProps) {
  const [src, setSrc] = useState("/brand/mr-spark-mascot.png");
  const pathname = usePathname() || `/${defaultLocale}`;
  const localeSegment = pathname.split("/")[1];
  const locale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;

  return (
    <div className={`relative mx-auto w-full ${compact ? "max-w-[10rem]" : "max-w-[19rem]"} ${className}`}>
      <div className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.96))] p-3 shadow-[var(--shadow-soft)]">
        <Image
          src={src}
          onError={() => setSrc("/brand/mr-spark-mascot.svg")}
          alt={mascotAltByLocale[locale]}
          width={compact ? 180 : 360}
          height={compact ? 180 : 360}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
