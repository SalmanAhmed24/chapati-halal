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
        img="/images/gallery-hero.jpg"
        alt="The Chapati Halal counter with its illuminated sign, menu boards and food displays"
        grain={false}
        imgClassName="object-[52%_40%]"
      />
      <GalleryGrid />
      <CTABand secondary={{ href: "/menu", label: "View Our Menu" }} />
    </>
  );
}
