"use client";
import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/** Desktop-only follower cursor. Elements with data-cursor="label" show a label bubble. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    setEnabled(mq.matches);
    if (!mq.matches) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor], a, button");
      setLabel(t?.dataset.cursor ?? null);
      setHover(!!t);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-normal"
      style={{ x: sx, y: sy }}
    >
      <m.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron flex items-center justify-center text-ink font-bold text-[11px] uppercase tracking-[0.15em] shadow-lg"
        animate={{ width: label ? 96 : hover ? 44 : 12, height: label ? 96 : hover ? 44 : 12, opacity: hover && !label ? 0.35 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        <AnimatePresence>
          {label && (
            <m.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}>
              {label}
            </m.span>
          )}
        </AnimatePresence>
      </m.div>
    </m.div>
  );
}
