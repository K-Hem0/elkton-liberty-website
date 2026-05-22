import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/data/menu";

export function FoodHighlights() {
  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Deli favorites
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy/75">
            Hot food made fresh throughout the day — whether you&apos;re fueling
            up at dawn or grabbing lunch on the go.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block cursor-pointer overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold/70 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <div className="border-t-4 border-gold transition-colors duration-200 group-hover:border-brand-red" />
              <div className="relative aspect-[16/10] bg-navy/5">
                {/* TODO: Replace placeholder with a real photo of {item.title} */}
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy transition-colors group-hover:text-brand-red">
                  {item.title}
                </h3>
                <p className="mt-2 text-navy/75">{item.description}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-brand-red transition-colors group-hover:text-brand-red-dark">
                  View {item.title.toLowerCase()} menu →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
