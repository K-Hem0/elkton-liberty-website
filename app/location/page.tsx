import type { Metadata } from "next";
import { LocationSection } from "@/components/LocationSection";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Location",
  description: `Visit ${business.name} at ${business.address.full}. Fuel open 24 hours. Deli ${business.hours.deliWeekdays}, ${business.hours.deliWeekend}.`,
};

export default function LocationPage() {
  return (
    <>
      <section className="bg-navy py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Location & Hours</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Stop by {business.address.full} for fuel, fresh food, and friendly
            local service.
          </p>
        </div>
      </section>
      <LocationSection expanded />
    </>
  );
}
