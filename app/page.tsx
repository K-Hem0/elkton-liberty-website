import { FoodHighlights } from "@/components/FoodHighlights";
import { FuelPatrioticSection } from "@/components/FuelPatrioticSection";
import { Hero } from "@/components/Hero";
import { InfoStrip } from "@/components/InfoStrip";
import { LocationSection } from "@/components/LocationSection";
import { MenuPreview } from "@/components/MenuPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <FuelPatrioticSection />
      <FoodHighlights />
      <MenuPreview />
      <LocationSection />
    </>
  );
}
