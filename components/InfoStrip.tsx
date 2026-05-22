import { business } from "@/data/business";
import { HoltzmanBadge } from "@/components/HoltzmanBadge";

const icons: Record<string, string> = {
  Fuel: "⛽",
  Deli: "🥪",
  Hours: "🕐",
  Location: "📍",
};

export function InfoStrip() {
  return (
    <section className="border-y border-navy/10 bg-white py-8">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {business.infoStrip.map((item) => {
          const isFuel = item.label === "Fuel";

          return (
            <div
              key={item.label}
              className="flex gap-4 rounded-lg border border-navy/5 bg-cream/50 p-4"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-xl text-white"
                aria-hidden
              >
                {icons[item.label] ?? "★"}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">
                  {item.label}
                </p>
                <p className="mt-1 whitespace-pre-line text-sm text-navy/80">
                  {isFuel ? business.holtzman.fuelCardValue : item.value}
                </p>
                {isFuel && (
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    <p className="text-xs font-medium text-navy/60">
                      {business.holtzman.supplierLine}
                    </p>
                    <HoltzmanBadge size="sm" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
