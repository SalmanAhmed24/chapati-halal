"use client";
import { useRef } from "react";
import { gsap, useScrollAnimation } from "@/lib/gsap";

/** Dashed connector that draws itself across the "how it works" steps as you scroll. */
export default function StepsLine() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(() => {
    gsap.fromTo(
      "[data-line]",
      { scaleX: 0 },
      { scaleX: 1, ease: "none", scrollTrigger: { trigger: ref.current, start: "top 85%", end: "top 45%", scrub: true } }
    );
  }, ref);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-10 hidden md:block">
      <div data-line className="h-[2px] origin-left bg-[repeating-linear-gradient(90deg,#f28c1b_0_10px,transparent_10px_18px)]" />
    </div>
  );
}
