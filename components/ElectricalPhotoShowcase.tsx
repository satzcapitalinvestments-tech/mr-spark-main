"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import MascotHero from "@/components/MascotHero";
import type { LocaleCode } from "@/data/i18n/languages";
import { defaultLocale, isLocale } from "@/lib/i18n";

type ShowcaseVariant = "home" | "emergency" | "coverage" | "services" | "pricing" | "contact";

type ShowcaseImage = {
  src: string;
  alt: string;
};

type ShowcaseImageKey = "panel" | "meter" | "inspection";
type ShowcaseEmphasis = "hero" | "section";

const panelImageSrc = {
  src: "/imagery/electrician-panel-drill.jpg",
};

const meterImageSrc = {
  src: "/imagery/electrician-multimeter.jpg",
};

const inspectionImageSrc = {
  src: "/imagery/electrician-inspection.jpg",
};

const showcaseAltByLocale: Record<
  LocaleCode,
  {
    panel: string;
    meter: string;
    inspection: string;
  }
> = {
  de: {
    panel: "Elektriker arbeitet mit Werkzeug an einem geöffneten Schaltschrank.",
    meter: "Elektriker misst eine Elektroverteilung mit einem Multimeter.",
    inspection: "Techniker prüft eine elektrische Anlage vor Ort.",
  },
  en: {
    panel: "Electrician working with tools on an open distribution cabinet.",
    meter: "Electrician measuring an electrical panel with a multimeter.",
    inspection: "Technician inspecting an electrical installation on site.",
  },
  tr: {
    panel: "Elektrikci acik bir elektrik panosunda aletlerle calisiyor.",
    meter: "Elektrikci bir multimetre ile elektrik panosunu olcuyor.",
    inspection: "Teknisyen sahada bir elektrik tesisatini kontrol ediyor.",
  },
  ar: {
    panel: "كهربائي يعمل بأدوات داخل لوحة توزيع كهربائية مفتوحة.",
    meter: "كهربائي يقيس لوحة كهربائية باستخدام جهاز متعدد القياس.",
    inspection: "فني يفحص تركيبًا كهربائيًا في الموقع.",
  },
  ru: {
    panel: "Электрик работает инструментом у открытого электрического шкафа.",
    meter: "Электрик измеряет электрощит мультиметром.",
    inspection: "Техник проверяет электрическую установку на месте.",
  },
  pl: {
    panel: "Elektryk pracuje narzedziami przy otwartej rozdzielni elektrycznej.",
    meter: "Elektryk mierzy rozdzielnie elektryczna multimetrem.",
    inspection: "Technik sprawdza instalacje elektryczna na miejscu.",
  },
  uk: {
    panel: "Електрик працює інструментом біля відкритої електрощитової шафи.",
    meter: "Електрик вимірює електрощит мультиметром.",
    inspection: "Технік перевіряє електричну установку на місці.",
  },
  ro: {
    panel: "Electricianul lucreaza cu unelte la un tablou electric deschis.",
    meter: "Electricianul masoara un panou electric cu un multimetru.",
    inspection: "Tehnicianul verifica o instalatie electrica la fata locului.",
  },
};

const variantContent: Record<
  ShowcaseVariant,
  {
    primaryImage: ShowcaseImageKey;
    secondaryImage: ShowcaseImageKey;
    tertiaryImage: ShowcaseImageKey;
  }
> = {
  home: {
    primaryImage: "panel",
    secondaryImage: "meter",
    tertiaryImage: "inspection",
  },
  emergency: {
    primaryImage: "meter",
    secondaryImage: "inspection",
    tertiaryImage: "panel",
  },
  coverage: {
    primaryImage: "inspection",
    secondaryImage: "panel",
    tertiaryImage: "meter",
  },
  services: {
    primaryImage: "panel",
    secondaryImage: "inspection",
    tertiaryImage: "meter",
  },
  pricing: {
    primaryImage: "inspection",
    secondaryImage: "meter",
    tertiaryImage: "panel",
  },
  contact: {
    primaryImage: "meter",
    secondaryImage: "panel",
    tertiaryImage: "inspection",
  },
};

function PhotoTile({
  image,
  priority = false,
  ratio = "4 / 5",
}: {
  image: ShowcaseImage;
  priority?: boolean;
  ratio?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white shadow-[0_20px_54px_rgba(7,26,51,0.14)]">
      <div className="relative" style={{ aspectRatio: ratio }}>
        <Image src={image.src} alt={image.alt} fill priority={priority} className="object-cover" />
      </div>
    </div>
  );
}

export default function ElectricalPhotoShowcase({
  variant,
  emphasis = "hero",
}: {
  variant: ShowcaseVariant;
  emphasis?: ShowcaseEmphasis;
}) {
  const pathname = usePathname() || `/${defaultLocale}`;
  const localeSegment = pathname.split("/")[1];
  const locale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;
  const altCopy = showcaseAltByLocale[locale];
  const panelImage: ShowcaseImage = { ...panelImageSrc, alt: altCopy.panel };
  const meterImage: ShowcaseImage = { ...meterImageSrc, alt: altCopy.meter };
  const inspectionImage: ShowcaseImage = { ...inspectionImageSrc, alt: altCopy.inspection };
  const content = variantContent[variant];
  const imageByKey: Record<ShowcaseImageKey, ShowcaseImage> = {
    panel: panelImage,
    meter: meterImage,
    inspection: inspectionImage,
  };
  const showcaseChips = ["24h", "Telegram", "DE"];

  if (emphasis === "section") {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <PhotoTile image={imageByKey[content.primaryImage]} ratio="5 / 4" />
        <PhotoTile image={imageByKey[content.tertiaryImage]} ratio="5 / 4" />
      </div>
    );
  }

  return (
    <div className="rounded-[2.4rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(234,248,255,0.94))] p-4 shadow-[0_28px_80px_rgba(7,26,51,0.14)]">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(17rem,0.88fr)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_54px_rgba(7,26,51,0.14)]">
          <div className="relative" style={{ aspectRatio: "5 / 6" }}>
            <Image
              src={imageByKey[content.primaryImage].src}
              alt={imageByKey[content.primaryImage].alt}
              fill
              priority={variant === "home"}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
            {showcaseChips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/80 bg-white/92 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-[color:var(--ink)] shadow-[0_10px_24px_rgba(7,26,51,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-4 shadow-[0_18px_46px_rgba(7,26,51,0.12)]">
            <MascotHero compact className="max-w-[14rem] md:max-w-[15rem]" />
          </div>
          <PhotoTile image={imageByKey[content.secondaryImage]} ratio="4 / 3" />
        </div>
      </div>
    </div>
  );
}
