"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap, useScrollAnimation, prefersReducedMotion } from "@/lib/gsap";
import Button from "../Button";

/** Image starts as an inset card and expands to full-bleed as you scroll. */
export default function Ambience() {
  const root = useRef<HTMLElement>(null);
  useScrollAnimation(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 85%", end: "center center", scrub: 1 },
      });
      tl.fromTo("[data-frame]", { clipPath: "inset(10% 8% 10% 8% round 32px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" }, 0)
        .fromTo("[data-zoom]", { scale: 1.3 }, { scale: 1, ease: "none" }, 0)
        .fromTo("[data-copy] > *", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, ease: "power2.out" }, 0.35);
    },
    root
  );

  return (
    <section ref={root} className="relative">
      <div data-frame className="relative h-[88svh] min-h-[540px] overflow-hidden">
        <div data-zoom className="absolute inset-0">
          <Image src="/images/interior-warm.jpg" alt="Lantern-lit dining room with green banquettes" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/55 to-transparent" />
        <div data-copy className="container-x relative flex h-full flex-col justify-center text-cream">
          <p className="eyebrow text-saffron">A warm &amp; welcoming space</p>
          <h2 className="font-display mt-5 text-[clamp(3rem,9vw,8.5rem)] font-medium leading-[0.92]">
            Dine.
            <br />
            Relax.
            <br />
            <span className="font-italic-display text-saffron">Enjoy.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-cream/85">
            Join us for a memorable dining experience with delicious food, friendly service and a cosy, lantern-lit atmosphere.
          </p>
          <div className="mt-8">
            <Button href="/locations" variant="cream">
              Visit a Location
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
