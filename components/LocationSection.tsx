import { Button } from "@/components/Button";
import { business } from "@/data/business";

type LocationSectionProps = {
  expanded?: boolean;
};

export function LocationSection({ expanded = false }: LocationSectionProps) {
  return (
    <section id="location" className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          {expanded ? "Find us in Elkton" : "Visit Liberty Gas & Deli"}
        </h2>
        <p className="mt-2 max-w-2xl text-navy/75">
          Conveniently located on 7th Street — fuel, food, and friendly service
          in one stop.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                Address
              </p>
              <p className="mt-2 text-lg font-medium text-navy">
                {business.address.full}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                Hours
              </p>
              <ul className="mt-2 space-y-2 text-navy/80">
                <li>
                  <span className="font-medium text-navy">Fuel:</span>{" "}
                  {business.hours.fuel}
                </li>
                <li>
                  <span className="font-medium text-navy">Deli:</span>
                  <ul className="mt-1 space-y-1 pl-0">
                    <li>{business.hours.deliWeekdays}</li>
                    <li>{business.hours.deliWeekend}</li>
                  </ul>
                </li>
                {expanded && (
                  <li className="pt-2">
                    <span className="font-medium text-navy">Weekly:</span>
                    <ul className="mt-2 space-y-1">
                      {business.hours.weekly.map((entry) => (
                        <li
                          key={entry.day}
                          className="flex justify-between gap-4 border-b border-navy/5 pb-1 last:border-0"
                        >
                          <span>{entry.day}</span>
                          <span className="font-medium text-navy">
                            {entry.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
            </div>

            {expanded && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                  Phone
                </p>
                <p className="mt-2">
                  <a
                    href={`tel:${business.phone.replace(/\D/g, "")}`}
                    className="text-lg font-medium text-brand-red hover:text-brand-red-dark"
                  >
                    {business.phone}
                  </a>
                </p>
                <p className="mt-4 text-sm text-navy/75">{business.parking}</p>
              </div>
            )}

            <Button
              href={business.links.directions}
              external
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Get Directions
            </Button>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-md ring-1 ring-navy/5">
              <div className="relative aspect-[4/3] w-full sm:aspect-video">
                <iframe
                  src={business.links.mapsEmbed}
                  title="Liberty Gas and Deli location on Google Maps"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <p className="text-center text-sm text-navy/70">
              <a
                href={business.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-red hover:text-brand-red-dark"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
