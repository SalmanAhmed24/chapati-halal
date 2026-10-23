"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { menu } from "@/lib/data";
import { RevealText } from "../motion";
import { Chili, Leaf } from "../Icons";
import { getLenis } from "../SmoothScroll";

export default function MenuBrowser() {
  const [active, setActive] = useState(menu[0].slug);
  const [vegOnly, setVegOnly] = useState(false);
  const pills = useRef<HTMLElement>(null);

  // Scroll-spy
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    menu.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [vegOnly]);

  // Keep the active pill visible in the horizontal strip
  useEffect(() => {
    const el = pills.current?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    el?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }, [active]);

  // Honour #hash deep-links (e.g. /menu#curries from the home page)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && menu.some((s) => s.slug === hash)) {
      window.setTimeout(() => jump(hash), 400);
    }
  }, []);

  const jump = (slug: string) => {
    const el = document.getElementById(slug);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -150, duration: 1.4 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: "smooth" });
    history.replaceState(null, "", `#${slug}`);
  };

  const sections = menu
    .map((s) => ({ ...s, items: vegOnly ? s.items.filter((i) => i.veg) : s.items }))
    .filter((s) => s.items.length > 0);

  return (
    <div id="menu" className="relative">
      <div className="sticky top-0 z-30 bg-forest text-cream shadow-[0_10px_30px_-15px_rgba(0,0,0,.4)]">
        <div className="container-x flex items-center gap-4 py-3">
          <nav ref={pills} className="no-scrollbar -mx-1 flex flex-1 gap-1 overflow-x-auto px-1" aria-label="Menu categories">
            {sections.map((s) => (
              <button
                key={s.slug}
                type="button"
                aria-current={active === s.slug ? "true" : undefined}
                data-slug={s.slug}
                onClick={() => jump(s.slug)}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${active === s.slug ? "text-ink" : "text-mint hover:text-cream"}`}
              >
                {active === s.slug && (
                  <m.span layoutId="menu-pill" className="absolute inset-0 rounded-full bg-saffron" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                )}
                <span className="relative">{s.title}</span>
              </button>
            ))}
          </nav>
          <label className="flex shrink-0 cursor-pointer items-center gap-2 text-sm font-bold">
            <input type="checkbox" className="peer sr-only" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
            <span className="relative h-6 w-11 rounded-full bg-cream/20 transition-colors peer-checked:bg-leaf peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-saffron">
              <m.span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-cream" animate={{ x: vegOnly ? 20 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
            </span>
            <span className="hidden sm:inline">Veg only</span>
            <span className="sm:hidden">Veg</span>
          </label>
        </div>
      </div>

      <div className="container-x pb-24 pt-8">
        {sections.map((s) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-40 pt-16 md:pt-24" aria-labelledby={`${s.slug}-h`}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-forest/15 pb-6">
              <RevealText as="h2" className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-medium leading-none text-forest">
                <span id={`${s.slug}-h`}>{s.title}</span>
              </RevealText>
              <p className="max-w-sm text-muted">{s.intro}</p>
            </div>
            <m.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {s.items.map((item, i) => (
                  <m.li
                    layout
                    key={item.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col overflow-hidden rounded-[22px] border border-forest/10 bg-cream shadow-[0_1px_0_rgba(14,59,44,.04)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(14,59,44,.45)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={item.img} alt={item.name} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 92vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110" />
                      <div className="absolute left-3 top-3 flex gap-1.5">
                        {item.veg && (
                          <span className="flex items-center gap-1 rounded-full bg-cream/95 px-2.5 py-1 text-xs font-bold text-leaf">
                            <Leaf size={14} /> Veg
                          </span>
                        )}
                        {item.spicy && (
                          <span className="flex items-center gap-1 rounded-full bg-cream/95 px-2.5 py-1 text-xs font-bold text-[#a3241a]">
                            <Chili size={14} /> Spicy
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-2xl leading-tight text-forest">{item.name}</h3>
                        {item.price && <span className="shrink-0 rounded-full bg-saffron px-3 py-1 text-sm font-extrabold text-ink">{item.price}</span>}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
                    </div>
                  </m.li>
                ))}
              </AnimatePresence>
            </m.ul>
          </section>
        ))}
      </div>
    </div>
  );
}
