import Image from "next/image";

type BrandLogoProps = {
  theme?: "dark" | "light";
  size?: "header" | "footer" | "mark";
  className?: string;
};

const logoSizeByVariant = {
  header: { width: 296, height: 70 },
  footer: { width: 224, height: 50 },
  mark: { width: 46, height: 46 },
} as const;

export default function BrandLogo({
  theme = "dark",
  size = "header",
  className = "",
}: BrandLogoProps) {
  const asset = size === "mark"
    ? "/brand/mr-spark-symbol.svg"
    : theme === "light"
      ? "/brand/mr-spark-logo-light.svg"
      : "/brand/mr-spark-logo-dark.svg";
  const dimensions = logoSizeByVariant[size];

  return (
    <Image
      src={asset}
      alt="Mr Spark"
      width={dimensions.width}
      height={dimensions.height}
      priority={size === "header"}
      className={className}
      unoptimized
    />
  );
}
