"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { m, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { categories } from "@/lib/data";
import { RevealText } from "../motion";
import { ArrowUpRight } from "../Icons";

/** Editorial list: hovering a row floats its dish photo after the cursor (desktop). */
export default function CategoryList() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22 });
  const sy = useSpring(y, { stiffness: 180, damping: 22 });

  return (
    <section
      className="relative py-24 md:py-36"
      onPointerMove={(e) => {
        x.set(e.clientX);
        y.set(e.clientY);
      }}
    >
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-saffron-ink">Explore our menu</p>
            <RevealText as="h2" className="font-display mt-4 text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-none text-forest">
              Menu <span className="font-italic-display text-saffron-ink">categories</span>
            </RevealText>
          </div>
          <p className="max-w-sm text-muted">Discover a variety of flavourful dishes prepared with authentic spices.</p>
        </div>

        <ul className="mt-14 border-t border-forest/15" onPointerLeave={() => setActive(null)}>
          {categories.map((c, i) => (
            <li key={c.slug} className="border-b border-forest/15">
              <Link
                href={`/menu#${c.slug}`}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                className="group relative flex items-center gap-4 py-5 md:gap-8 md:py-7"
              >
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full md:hidden">
                  <Image src={c.img} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="hidden w-10 text-sm font-bold text-saffron-ink md:block">0{i + 1}</span>
                <span className="font-display flex-1 text-[clamp(1.6rem,4.4vw,4rem)] leading-none text-forest transition-[transform,color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-4 group-hover:text-saffron-ink">
                  {c.name}
                </span>
                <span className="hidden max-w-[22ch] text-right text-sm text-muted lg:block">{c.note}</span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-forest/20 text-forest transition-all duration-500 group-hover:rotate-45 group-hover:border-saffron group-hover:bg-saffron group-hover:text-ink">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <m.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block" style={{ x: sx, y: sy }}>
        <AnimatePresence>
          {active !== null && (
            <m.div
              key="float"
              className="relative -ml-[140px] -mt-[180px] h-[360px] w-[280px] overflow-hidden rounded-[999px_999px_24px_24px] shadow-2xl"
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 8 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <m.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image src={categories[active].img} alt="" fill sizes="280px" className="object-cover" />
                </m.div>
              </AnimatePresence>
            </m.div>
          )}
        </AnimatePresence>
      </m.div>
    </section>
  );
}
