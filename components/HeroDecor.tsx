"use client";
import { m, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/** Floating spice illustrations with scroll + pointer parallax. Purely decorative. */
export default function HeroDecor() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -160]);
  const y2 = useTransform(scrollY, [0, 800], [0, -80]);
  const r = useTransform(scrollY, [0, 800], [0, 140]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 30);
      my.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {/* Star anise */}
      <m.svg style={{ y: y1, x: sx, rotate: r }} className="absolute left-[46%] top-[18%] hidden w-14 text-saffron-ink/70 md:block" viewBox="0 0 64 64">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="32" cy="16" rx="6" ry="14" fill="currentColor" opacity=".85" transform={`rotate(${i * 45} 32 32)`} />
        ))}
        <circle cx="32" cy="32" r="5" fill="#5a2a00" />
      </m.svg>
      {/* Leaf */}
      <m.svg style={{ y: y2, x: sy }} className="absolute -right-6 bottom-[4%] w-24 text-leaf/80 md:w-32" viewBox="0 0 100 100">
        <path d="M10 90C10 40 40 10 90 10 90 60 60 90 10 90Z" fill="currentColor" />
        <path d="M10 90 70 30" stroke="#fbf4e6" strokeWidth="2" opacity=".5" />
      </m.svg>
      {/* Chili */}
      <m.svg style={{ y: y1, x: sy }} className="absolute bottom-[8%] left-[38%] hidden w-16 md:block" viewBox="0 0 80 40">
        <path d="M8 26c18 8 44 6 60-12 3-3 1-7-3-6-14 6-32 10-54 8-4 0-6 8-3 10Z" fill="#c2261b" />
        <path d="M66 10c3-6 8-7 12-5" stroke="#1f6b47" strokeWidth="3" fill="none" strokeLinecap="round" />
      </m.svg>
      {/* Cardamom dots */}
      <m.div style={{ y: y2, x: sx }} className="absolute right-[6%] top-[12%] hidden gap-2 lg:flex">
        <span className="h-3 w-5 rounded-full bg-leaf/50" />
        <span className="mt-3 h-3 w-5 rounded-full bg-leaf/40" />
      </m.div>
    </div>
  );
}
