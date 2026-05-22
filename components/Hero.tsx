import fs from "fs";
import path from "path";
import Image from "next/image";
import { Button } from "@/components/Button";
import { business } from "@/data/business";

const HERO_IMAGE_JPG = "/images/station-exterior.jpg";
const HERO_IMAGE_FALLBACK = "/images/hero.svg";

const floatingBadges = [
  { label: "Open Daily", position: "right-0 top-4 sm:-right-3 sm:top-6" },
  { label: "Hot Breakfast", position: "bottom-6 left-0 sm:-left-4 sm:bottom-10" },
  { label: "Fuel + Deli", position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 sm:top-2" },
] as const;

function getHeroImageSrc(): { src: string; usePhoto: boolean } {
  const photoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "station-exterior.jpg",
  );
  if (fs.existsSync(photoPath)) {
    return { src: HERO_IMAGE_JPG, usePhoto: true };
  }
  return { src: HERO_IMAGE_FALLBACK, usePhoto: false };
}

export function Hero() {
  const { src: heroImageSrc, usePhoto } = getHeroImageSrc();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-[#163a5f]">
      {/* Soft decorative glows */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-white/5 blur-2xl"
        aria-hidden
      />

      {/* Faint dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
        {/* Left: copy + CTAs */}
        <div className="relative z-10">
          <p className="inline-flex items-center rounded-full border border-gold/35 bg-white/[0.08] px-3.5 py-1 text-[0.65rem] font-semibold uppercase leading-none tracking-[0.16em] text-gold backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[0.7rem] sm:tracking-[0.2em]">
            {business.heroBadge}
          </p>

          <h1 className="mt-3 max-w-xs text-3xl font-bold leading-[1.05] tracking-tight text-white sm:mt-4 sm:max-w-md sm:text-4xl lg:max-w-lg lg:text-[2.125rem]">
            {business.heroHeadline}
          </h1>

          <p className="mt-3 max-w-md text-base leading-snug text-white/85 sm:max-w-lg">
            {business.heroSubheadline}
          </p>

          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold ring-1 ring-white/25"
              aria-hidden
            />
            {business.holtzman.heroFuelBadge}
          </p>

          <div className="mt-6 flex w-full max-w-md flex-col gap-2.5 lg:max-w-lg">
            <Button
              href={business.links.doordash}
              external
              variant="primary"
              className="w-full shadow-lg shadow-black/25 hover:-translate-y-0.5"
            >
              Order on DoorDash
            </Button>
            <div className="grid grid-cols-2 gap-2.5">
              <Button
                href={business.links.directions}
                external
                variant="outline-light"
                className="w-full backdrop-blur-sm hover:-translate-y-0.5"
              >
                Get Directions
              </Button>
              <Button
                href="/menu"
                variant="outline-light"
                className="w-full border-gold/50 bg-gold/15 text-white hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy"
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Right: image card + floating badges */}
        <div className="relative mt-10 lg:mt-0">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Gold accent frame */}
            <div
              className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-gold/50 via-gold/20 to-brand-red/30 opacity-80 blur-sm"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-dark/50 shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[4/3]">
                {/* TODO: Add public/images/station-exterior.jpg — auto-used when the file exists */}
                <Image
                  src={heroImageSrc}
                  alt="Liberty Gas and Deli station exterior in Elkton, Virginia"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
              </div>
            </div>

            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className={`absolute z-10 ${badge.position}`}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/95 px-3 py-2 text-xs font-semibold text-navy shadow-lg shadow-black/15 backdrop-blur-sm sm:px-4 sm:text-sm">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red"
                    aria-hidden
                  />
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
