import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Manifesto from "@/components/home/Manifesto";
import SignatureScroll from "@/components/home/SignatureScroll";
import Story from "@/components/home/Story";
import CategoryList from "@/components/home/CategoryList";
import Ambience from "@/components/home/Ambience";
import Testimonials from "@/components/home/Testimonials";
import LocationsTeaser from "@/components/home/LocationsTeaser";
import CTABand from "@/components/CTABand";
import { Marquee } from "@/components/motion";
import { Suspense } from "react";

const words = ["Biryani", "Karahi", "Chapati", "Seekh Kebab", "Nihari", "Samosa", "Mango Lassi", "Gulab Jamun"];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-saffron py-5 text-ink" aria-hidden>
        <Marquee speed={36}>
          {words.map((w) => (
            <span key={w} className="font-display flex items-center gap-8 pr-8 text-[clamp(1.6rem,3.4vw,3rem)] italic">
              {w}
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-forest">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6Z" fill="currentColor" />
              </svg>
            </span>
          ))}
        </Marquee>
      </div>
      <Suspense>
        <Features />
      </Suspense>
      <Suspense>
        <Manifesto />
      </Suspense>
      <Suspense>
        <SignatureScroll />
      </Suspense>
      <Suspense>
        <Story />
      </Suspense>
      <Suspense>
        <CategoryList />
      </Suspense>
      <Suspense>
        <Ambience />
      </Suspense>
      <Suspense>
        <Testimonials />
      </Suspense>
      <Suspense>
        <LocationsTeaser />
      </Suspense>
      <Suspense>
        <CTABand />
      </Suspense>
    </>
  );
}
