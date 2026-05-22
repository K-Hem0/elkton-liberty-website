"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { business } from "@/data/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/location", label: "Location" },
];

function isActive(pathname: string, href: string) {
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-5 sm:py-3">
        <Link
          href="/"
          className="shrink-0 leading-tight transition-opacity hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            {business.shortName}
            <span className="font-semibold text-white/85"> & Deli</span>
          </span>
        </Link>

        <nav
          className="hidden items-center rounded-full border border-white/10 bg-white/[0.06] p-1 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  active
                    ? "bg-white/15 text-white shadow-sm ring-1 ring-gold/45"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button
            href={business.links.doordash}
            external
            variant="primary"
            className="!min-h-10 !w-auto px-5 py-2 text-sm shadow-md"
          >
            Order on DoorDash
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-navy-dark px-4 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                      active
                        ? "bg-white/12 text-white ring-1 ring-inset ring-gold/40"
                        : "text-white/90 hover:bg-white/5"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button
                href={business.links.doordash}
                external
                variant="primary"
                className="!min-h-11 w-full"
              >
                Order on DoorDash
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
