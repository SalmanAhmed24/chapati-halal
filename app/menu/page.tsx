import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import MenuBrowser from "@/components/menu/MenuBrowser";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Menu",
  description: "Biryani, curries, karahi, BBQ, fresh chapati, snacks, desserts and lassi — the full Chapati Halal menu.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Our menu"
        line1="A taste of"
        line2="India & Pakistan."
        text="Explore our flavourful menu of authentic Indian and Pakistani dishes, prepared with fresh ingredients, traditional spices and a whole lot of love."
        img="/images/hero-biryani.jpg"
        alt="Beef biryani in a black bowl with fresh herbs"
      >
        <Button href="#menu">Browse the Menu</Button>
      </PageHero>
      <MenuBrowser />
      <CTABand title="Still" accent="hungry?" text="Explore more dishes on our menu, or place your order online for pickup or delivery." secondary={{ href: "/locations", label: "Find Our Location" }} />
    </>
  );
}
