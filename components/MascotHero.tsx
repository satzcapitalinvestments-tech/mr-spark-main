import Image from "next/image";

export default function MascotHero({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-200 via-cyan-100 to-amber-100 blur-2xl" />
      <Image src="/brand/mr-spark-mascot.svg" alt="Mr Spark Maskottchen" width={520} height={520} priority className="h-auto w-full rounded-3xl border border-sky-100 bg-white" />
    </div>
  );
}
