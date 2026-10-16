"use client";
import { useRef } from "react";
import { gsap, useScrollAnimation, prefersReducedMotion } from "@/lib/gsap";

/** Oversized wordmark whose letters rise in as the footer scrolls into view. */
export default function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimation(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-l]", {
        yPercent: 100,
        ease: "expo.out",
        duration: 1.4,
        stagger: 0.04,
        scrollTrigger: { trigger: ref.current, start: "top 95%", once: true },
      });
    },
    ref
  );
  const word = "Chapati Halal";
  return (
    <div ref={ref} aria-hidden className="container-x select-none overflow-hidden">
      <p className="font-display flex justify-between whitespace-nowrap text-[clamp(3.2rem,15.5vw,15rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-saffron">
        {word.split("").map((c, i) => (
          <span key={i} data-l className="inline-block">
            {c === " " ? " " : c}
          </span>
        ))}
      </p>
    </div>
  );
}
