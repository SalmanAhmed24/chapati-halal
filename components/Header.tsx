"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { m, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { nav, site } from "@/lib/data";
import Logo from "./Logo";
import Button from "./Button";
import { getLenis } from "./SmoothScroll";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 240 && y > prev && !open);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const l = getLenis();
    if (open) l?.stop();
    else l?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <m.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`container-x flex h-[var(--header-h)] items-center justify-between gap-6 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
            scrolled && !open ? "bg-cream/85 shadow-[0_1px_0_rgba(14,59,44,.08)] backdrop-blur-md" : ""
          }`}
        >
          <Link href="/" className="relative z-[60] block w-[104px] sm:w-[118px]">
            <span className="sr-only">Chapati Halal home</span>
            <Logo tone={open ? "light" : "dark"} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((n) => {
                const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                return (
                  <li key={n.href} className="relative">
                    <Link
                      href={n.href}
                      aria-current={active ? "page" : undefined}
                      className="relative block px-4 py-2 text-[0.92rem] font-semibold text-forest transition-colors hover:text-saffron-ink"
                    >
                      {n.label}
                      {active && (
                        <m.span
                          layoutId="nav-dot"
                          className="absolute bottom-0 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-saffron"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href={site.orderUrl}>Order Online</Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`relative z-[60] grid h-12 w-12 place-items-center rounded-full lg:hidden ${open ? "bg-saffron" : "bg-forest"}`}
            >
              <span className="relative block h-3 w-5">
                <m.span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded ${open ? "bg-ink" : "bg-cream"}`}
                  animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                />
                <m.span
                  className={`absolute bottom-0 left-0 h-[2px] w-5 rounded ${open ? "bg-ink" : "bg-cream"}`}
                  animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                />
              </span>
            </button>
          </div>
        </div>
      </m.header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="jaali fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto px-[var(--gutter)] pb-10 pt-[calc(var(--header-h)+2rem)] text-cream lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.4rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.4rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.4rem)" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {nav.map((n, i) => (
                  <li key={n.href} className="overflow-hidden">
                    <m.div
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={n.href}
                        className={`font-display flex items-baseline gap-4 py-1 text-[clamp(2.4rem,11vw,4rem)] leading-[1.05] ${
                          pathname === n.href ? "text-saffron" : ""
                        }`}
                      >
                        <span className="font-sans text-xs font-bold tracking-widest text-saffron-soft">0{i + 1}</span>
                        {n.label}
                      </Link>
                    </m.div>
                  </li>
                ))}
              </ul>
            </nav>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
              className="mt-10 space-y-4 text-sm text-mint"
            >
              <Button href={site.orderUrl} className="w-full">
                Order Online
              </Button>
              <p>
                <a href={site.phoneHref} className="underline-offset-4 hover:underline">
                  {site.phone}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </p>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
