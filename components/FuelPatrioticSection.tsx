import { business } from "@/data/business";
import { HoltzmanBadge } from "@/components/HoltzmanBadge";

export function FuelPatrioticSection() {
  return (
    <section className="relative overflow-hidden border-y border-navy/10 bg-cream py-12 sm:py-14">
      {/* Subtle patriotic accents */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-red via-white to-navy"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-24 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #0f2744 0, #0f2744 12px, transparent 12px, transparent 24px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-8 top-6 text-brand-red/15 sm:left-12"
        aria-hidden
      >
        <span className="text-lg">★</span>
        <span className="ml-3 text-sm">★</span>
        <span className="ml-6 text-xs">★</span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm ring-1 ring-navy/5">
          <div className="h-1 bg-gradient-to-r from-brand-red via-white to-navy" aria-hidden />
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                Local fuel · Elkton, VA
              </p>
              <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                {business.holtzman.patrioticTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-navy/80 leading-relaxed">
                {business.holtzman.patrioticText}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy/70">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                {business.holtzman.supplierLine}
              </p>
            </div>
            <div className="flex shrink-0 items-center justify-start lg:justify-end">
              <HoltzmanBadge size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
