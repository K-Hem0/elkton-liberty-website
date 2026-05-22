import Link from "next/link";
import { Button } from "@/components/Button";
import { business } from "@/data/business";
import {
  formatMenuItemLabel,
  popularPreviewItems,
} from "@/data/menu";

export function MenuPreview() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Popular menu picks
            </h2>
            <p className="mt-2 text-navy/75">
              Customer favorites from our deli — see the full menu for
              breakfast, lunch, fried chicken, and more.
            </p>
          </div>
          <Link
            href="/menu"
            className="text-sm font-semibold text-brand-red hover:text-brand-red-dark"
          >
            View full menu →
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {popularPreviewItems.map((item, index) => (
            <li
              key={`${item.name}-${item.size ?? index}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-navy/10 bg-cream/30 px-5 py-4"
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

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/menu" variant="outline">
            View Menu
          </Button>
          <Button href={business.links.doordash} external variant="primary">
            Order on DoorDash
          </Button>
        </div>
      </div>
    </section>
  );
}
