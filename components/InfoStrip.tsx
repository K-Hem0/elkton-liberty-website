import { business } from "@/data/business";

const icons: Record<string, string> = {
  Fuel: "⛽",
  Deli: "🥪",
  Hours: "🕐",
  Location: "📍",
};

function InfoCardBadge({
  label,
  href,
}: {
  label: string;
  href?: string;
}) {
  const className =
    "inline-flex w-fit items-center rounded-full border border-navy/10 bg-white px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-navy/70 transition-colors";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} hover:border-gold/50 hover:bg-gold/10 hover:text-navy`}
      >
        {label}
      </a>
    );
  }

  return <span className={className}>{label}</span>;
}

export function InfoStrip() {
  return (
    <section className="border-y border-navy/10 bg-white py-8">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {business.infoStrip.map((item) => {
          const badgeHref =
            "badgeHref" in item && item.badgeHref === "directions"
              ? business.links.directions
              : undefined;

          return (
            <article
              key={item.label}
              className="flex h-full flex-col rounded-lg border border-navy/5 bg-cream/50 p-4 transition-all duration-200 hover:border-gold/40 hover:bg-cream hover:shadow-md"
            >
              <div className="flex flex-1 gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-lg text-white"
                  aria-hidden
                >
                  {icons[item.label] ?? "★"}
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-red">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-navy/80">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="mt-auto shrink-0 pt-3">
                <InfoCardBadge label={item.badge} href={badgeHref} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
