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
    <div className={`relative mx-auto w-full ${compact ? "max-w-[10rem]" : "max-w-[19rem]"} ${className}`}>
      <div className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.96))] p-3 shadow-[var(--shadow-soft)]">
        <Image
          src={src}
          onError={() => setSrc("/brand/mr-spark-mascot.svg")}
          alt="Mr Spark Maskottchen mit Helm und Werkzeug"
          width={compact ? 180 : 360}
          height={compact ? 180 : 360}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
