import Link from "next/link";
import { HoltzmanBadge } from "@/components/HoltzmanBadge";
import { business } from "@/data/business";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/location", label: "Location" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{business.name}</p>
            <p className="mt-2 text-sm text-white/80">{business.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Visit us
            </p>
            <address className="mt-3 space-y-1 text-sm not-italic text-white/80">
              <p>{business.address.full}</p>
              <p>
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="hover:text-gold"
                >
                  {business.phone}
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Hours
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <span className="font-medium text-white">Fuel:</span>{" "}
                {business.hours.fuel}
              </li>
              <li>
                <span className="font-medium text-white">Deli:</span>
                <ul className="mt-1 space-y-1">
                  <li>{business.hours.deliWeekdays}</li>
                  <li>{business.hours.deliWeekend}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <nav
          className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-8"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={business.links.doordash}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/80 hover:text-gold"
          >
            Order on DoorDash
          </a>
        </nav>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/70 sm:justify-start">
            <span>{business.holtzman.supplierLine}</span>
            <HoltzmanBadge
              size="sm"
              className="border-white/15 bg-white/10 [&>span]:text-white/80"
            />
          </p>
          <p className="text-center text-xs text-white/60 sm:text-right">
            © {year} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
