import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments from Chapati Halal — our food, our dining rooms and the warm atmosphere we create for our guests.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our gallery"
        line1="A glimpse of"
        line2="Chapati Halal."
        text="Explore moments from our restaurants, delicious food, and the warm atmosphere we create for our guests. From flavourful dishes to a cosy dining room — see what makes us special."
        img="/images/storefront-day.jpg"
        alt="Chapati Halal storefront with outdoor seating"
      />
      <GalleryGrid />
      <CTABand secondary={{ href: "/menu", label: "View Our Menu" }} />
    </>
  );
}
