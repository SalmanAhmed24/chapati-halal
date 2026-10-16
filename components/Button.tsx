"use client";
import Link from "next/link";
import { useRef } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import { Arrow } from "./Icons";

type Variant = "saffron" | "forest" | "ghost-light" | "ghost-dark" | "cream";
const styles: Record<Variant, string> = {
  saffron: "bg-saffron text-ink",
  forest: "bg-forest text-cream",
  cream: "bg-cream text-forest",
  "ghost-light": "border border-saffron/70 text-cream",
  "ghost-dark": "border border-forest/40 text-forest",
};
const fills: Record<Variant, string> = {
  saffron: "bg-forest",
  forest: "bg-saffron",
  cream: "bg-saffron",
  "ghost-light": "bg-saffron",
  "ghost-dark": "bg-forest",
};
const hoverText: Record<Variant, string> = {
  saffron: "group-hover:text-cream",
  forest: "group-hover:text-ink",
  cream: "group-hover:text-ink",
  "ghost-light": "group-hover:text-ink",
  "ghost-dark": "group-hover:text-cream",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: boolean;
};

/** Magnetic pill button with a liquid fill on hover. */
export default function Button({ href, children, variant = "saffron", className = "", external, icon = true }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <>
      <span
        aria-hidden
        className={`absolute inset-0 translate-y-[101%] rounded-[inherit] transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 ${fills[variant]}`}
      />
      <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${hoverText[variant]}`}>
        {children}
        {icon && <Arrow size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </>
  );

  const cls = `group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-bold tracking-wide ${styles[variant]} ${className}`;

  return (
    <m.span style={{ x: sx, y: sy }} className="inline-block" onPointerMove={onMove} onPointerLeave={reset}>
      {external ? (
        <a ref={ref} href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link ref={ref} href={href} className={cls}>
          {inner}
        </Link>
      )}
    </m.span>
  );
}
