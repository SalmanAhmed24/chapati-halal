"use client";
import Image from "next/image";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cateringMenu } from "@/lib/data";
import { Bowl, Chef, Leaf, Utensils, Gift, Confetti } from "../Icons";

const icons = [Bowl, Chef, Utensils, Confetti, Leaf, Gift];

export default function CateringMenuTabs() {
  const [active, setActive] = useState(0);
  const tab = cateringMenu[active];

  return (
    <div>
      <div className="no-scrollbar -mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)]">
        <div role="tablist" aria-label="Catering menu categories" className="mx-auto flex w-max gap-1 rounded-full border border-cream/15 bg-forest-deep/60 p-1.5">
          {cateringMenu.map((c, i) => {
            const Icon = icons[i % icons.length];
            const selected = i === active;
            return (
              <button
                key={c.slug}
                id={`cat-tab-${c.slug}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="cat-panel"
                onClick={() => setActive(i)}
                className={`relative flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${selected ? "text-ink" : "text-mint hover:text-cream"}`}
              >
                {selected && <m.span layoutId="cat-tab" className="absolute inset-0 rounded-full bg-saffron" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <Icon size={18} className="relative" />
                <span className="relative">{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="cat-panel" role="tabpanel" aria-labelledby={`cat-tab-${tab.slug}`} className="mt-12">
        <AnimatePresence mode="wait">
          <m.ul
            key={tab.slug}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          >
            {tab.items.map((it) => (
              <m.li
                key={it.name}
                variants={{
                  hidden: { opacity: 0, y: 30, rotate: -1.5 },
                  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
                }}
                className="group overflow-hidden rounded-[22px] bg-cream text-ink"
              >
                <div className="relative aspect-[4/3] overflow-hidden grain">
                  <Image src={it.img} alt={it.name} fill sizes="(min-width:1024px) 23vw, (min-width:640px) 46vw, 92vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-forest">{it.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{it.desc}</p>
                </div>
              </m.li>
            ))}
          </m.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
