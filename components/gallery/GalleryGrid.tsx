"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { gallery, type GalleryItem } from "@/lib/data";
import { Arrow, Close } from "../Icons";
import { getLenis } from "../SmoothScroll";

const filters: { key: "all" | GalleryItem["cat"]; label: string }[] = [
  { key: "all", label: "All" },
  { key: "food", label: "Food & Drinks" },
  { key: "interior", label: "Interior" },
  { key: "exterior", label: "Exterior" },
  { key: "dining", label: "Dining Area" },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]["key"]>("all");
  const [open, setOpen] = useState<number | null>(null);
  const items = filter === "all" ? gallery : gallery.filter((g) => g.cat === filter);

  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    const l = getLenis();
    if (open !== null) l?.stop();
    else l?.start();
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <div className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] pb-2" role="group" aria-label="Filter photos">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`relative shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${
                filter === f.key ? "border-forest text-cream" : "border-forest/20 text-forest hover:border-forest"
              }`}
            >
              {filter === f.key && <m.span layoutId="gal-pill" className="absolute inset-0 rounded-full bg-forest" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>

        <m.ul layout className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4 [grid-auto-flow:dense]">
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <m.li
                layout
                key={g.src}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: Math.min(i * 0.03, 0.3) }}
                className={`${g.wide ? "col-span-2" : ""} ${g.tall ? "row-span-2" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  data-cursor="View"
                  aria-label={`Open photo: ${g.alt}`}
                  className="group relative block h-full w-full overflow-hidden rounded-[18px] grain"
                >
                  <m.div layoutId={`photo-${g.src}`} className="absolute inset-0">
                    <Image src={g.src} alt={g.alt} fill sizes={g.wide ? "(min-width:768px) 46vw, 92vw" : "(min-width:768px) 23vw, 46vw"} className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110" />
                  </m.div>
                  <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-forest-deep/90 to-transparent p-4 text-left text-sm font-semibold text-cream transition-transform duration-500 group-hover:translate-y-0">
                    {g.alt}
                  </span>
                </button>
              </m.li>
            ))}
          </AnimatePresence>
        </m.ul>
      </div>

      <AnimatePresence>
        {open !== null && items[open] && (
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={items[open].alt}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button type="button" aria-label="Close" className="absolute inset-0 bg-forest-deep/92 backdrop-blur-sm" onClick={() => setOpen(null)} />
            <m.div layoutId={`photo-${items[open].src}`} className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-[22px]" transition={{ type: "spring", stiffness: 220, damping: 30 }}>
              <Image src={items[open].src} alt={items[open].alt} fill sizes="90vw" className="object-cover" />
            </m.div>
            <p className="absolute bottom-6 left-1/2 w-[90%] -translate-x-1/2 text-center text-sm text-cream">{items[open].alt}</p>
            <button type="button" onClick={() => setOpen(null)} aria-label="Close photo" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-saffron text-ink">
              <Close size={20} />
            </button>
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-cream text-forest">
              <Arrow size={18} className="rotate-180" />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-cream text-forest">
              <Arrow size={18} />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
