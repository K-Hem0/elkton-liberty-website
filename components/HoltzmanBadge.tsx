import fs from "fs";
import path from "path";
import Image from "next/image";
import { business } from "@/data/business";

const sizeStyles = {
  sm: {
    image: "h-6 w-auto max-w-[88px]",
    text: "px-2 py-0.5 text-[0.65rem]",
  },
  md: {
    image: "h-9 w-auto max-w-[120px]",
    text: "px-2.5 py-1 text-xs",
  },
} as const;

function hasHoltzmanLogo(): boolean {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "holtzman-logo.png",
  );
  return fs.existsSync(logoPath);
}

type HoltzmanBadgeProps = {
  size?: keyof typeof sizeStyles;
  className?: string;
};

export function HoltzmanBadge({ size = "sm", className = "" }: HoltzmanBadgeProps) {
  const styles = sizeStyles[size];

  if (hasHoltzmanLogo()) {
    return (
      <Image
        src={business.holtzman.logoPath}
        alt={business.holtzman.logoAlt}
        width={120}
        height={36}
        className={`${styles.image} object-contain object-left ${className}`}
      />
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded border border-navy/15 bg-white/90 font-semibold uppercase tracking-wide text-navy/80 ${styles.text} ${className}`}
    >
      {business.holtzman.fallbackBadge}
    </span>
  );
}
