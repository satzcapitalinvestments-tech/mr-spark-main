"use client";

import Image from "next/image";
import { useState } from "react";

type MascotHeroProps = {
  compact?: boolean;
  className?: string;
};

export default function MascotHero({ compact = false, className = "" }: MascotHeroProps) {
  const [src, setSrc] = useState("/brand/mr-spark-mascot.png");

  return (
    <div className={`relative mx-auto w-full ${compact ? "max-w-xs" : "max-w-md"} ${className}`}>
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[color:var(--brand-soft)] via-white to-[color:var(--accent-soft)] blur-2xl" />
      <Image
        src={src}
        onError={() => setSrc("/brand/mr-spark-mascot.svg")}
        alt="Mr Spark Maskottchen"
        width={compact ? 320 : 520}
        height={compact ? 320 : 520}
        priority
        className="h-auto w-full rounded-[2rem] border border-[color:var(--line-strong)] bg-white/92 object-contain p-4 shadow-[var(--shadow-soft)]"
      />
    </div>
  );
}
