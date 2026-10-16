"use client";
import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Arrow, Star } from "../Icons";

export default function Testimonials() {
  const [[i, dir], set] = useState<[number, number]>([0, 1]);
  const go = (d: number) => set(([p]) => [(p + d + testimonials.length) % testimonials.length, d]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 6500);
    return () => window.clearInterval(id);
  }, [paused, i]);

  const t = testimonials[i];
  return (
    <section
      aria-roledescription="carousel"
      aria-label="Guest reviews"
      className="relative overflow-hidden bg-cream-2/70 py-24 md:py-36"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="container-x grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="eyebrow text-saffron-ink">What our guests say</p>
          <h2 className="font-display mt-4 text-[clamp(2.2rem,4.4vw,4rem)] font-medium leading-none text-forest">
            Loved by <span className="font-italic-display text-saffron-ink">our guests</span>
          </h2>
          <div className="mt-10 flex items-center gap-3">
            <button type="button" aria-label="Previous review" onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-forest/25 text-forest transition-colors hover:bg-forest hover:text-cream">
              <Arrow size={18} className="rotate-180" />
            </button>
            <button type="button" aria-label="Next review" onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full bg-forest text-cream transition-colors hover:bg-saffron hover:text-ink">
              <Arrow size={18} />
            </button>
            <span className="ml-3 text-sm font-bold text-forest" aria-live="polite">
              {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="relative min-h-[300px] md:min-h-[340px]">
          <AnimatePresence mode="wait" custom={dir}>
            <m.figure
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: dir * -60, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="flex gap-1 text-saffron" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={22} />
                ))}
              </div>
              <blockquote className="font-display mt-6 text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.15] text-forest">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-forest font-display text-lg text-saffron">{t.name[0]}</span>
                <span>
                  <span className="block font-bold text-forest">{t.name}</span>
                  <span className="text-sm text-muted">{t.meta}</span>
                </span>
              </figcaption>
            </m.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
