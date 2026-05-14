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
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-200 via-cyan-100 to-amber-100 blur-2xl" />
      <Image
        src={src}
        onError={() => setSrc("/brand/mr-spark-mascot.svg")}
        alt="Mr Spark Maskottchen"
        width={compact ? 320 : 520}
        height={compact ? 320 : 520}
        priority
        className="h-auto w-full rounded-3xl border border-sky-100 bg-white object-contain"
      />
    </div>
  );
}