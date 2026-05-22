import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { business } from "@/data/business";
import {
  formatMenuItemLabel,
  menuSections,
} from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: `View the full deli menu at ${business.name} in Elkton, VA — breakfast sandwiches, lunch plates, fried chicken, pizza, and more.`,
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-navy py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Deli Menu</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Hot breakfast, hearty lunch, fried chicken, pizza, and daily favorites
            — made fresh at our Elkton deli.
          </p>
          <nav
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            aria-label="Menu sections"
          >
            {menuSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-gold/50 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-4">
          {menuSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <div className="border-b-2 border-gold pb-3">
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-2 max-w-2xl text-navy/75">
                  {section.description}
                </p>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.items.map((item, index) => (
                  <li
                    key={`${item.name}-${item.size ?? index}`}
                    className="flex items-center justify-between gap-4 rounded-xl border border-navy/10 bg-white px-4 py-4 shadow-sm transition-shadow hover:shadow-md sm:px-5"
                  >
                    <p className="font-semibold text-navy">
                      {formatMenuItemLabel(item)}
                    </p>
                    <p className="shrink-0 text-lg font-bold text-brand-red">
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="rounded-xl border border-navy/10 bg-cream/60 px-5 py-4 text-center text-sm text-navy/75">
            Menu items and prices may change. Please call or stop by for the
            most accurate availability.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
          <p className="text-lg text-navy/80">
            Hungry now? Order delivery or pickup through DoorDash.
          </p>
          <Button href={business.links.doordash} external variant="primary">
            Order on DoorDash
          </Button>
        </div>
      </section>
    </>
  );
}
