"use client";
import { useRef, useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { m, useInView, animate } from "framer-motion";
import { gsap, ScrollTrigger, SplitText, useScrollAnimation, prefersReducedMotion } from "@/lib/gsap";

/* ------------------------------------------------------------------ */
/* RevealText — GSAP SplitText masked line reveal, triggered on scroll */
/* ------------------------------------------------------------------ */
type RevealTextProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  children: React.ReactNode;
  delay?: number;
  by?: "lines" | "words" | "chars";
};
export function RevealText({ as: Tag = "h2", className = "", children, delay = 0, by = "lines" }: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const el = ref.current;
      let tween: gsap.core.Tween | undefined;
      const split = SplitText.create(el, {
        type: by === "lines" ? "lines" : by === "words" ? "words,lines" : "chars,words,lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          tween?.kill();
          const targets = by === "lines" ? self.lines : by === "words" ? self.words : self.chars;
          tween = gsap.from(targets, {
            yPercent: 110,
            rotate: by === "chars" ? 6 : 2,
            duration: 1.2,
            stagger: by === "chars" ? 0.018 : by === "words" ? 0.04 : 0.09,
            delay,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
          return tween;
        },
      });
      return () => split.revert();
    },
    ref
  );
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* FadeUp — framer-motion in-view entrance                              */
/* ------------------------------------------------------------------ */
export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 40,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article" | "section";
}) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* ParallaxImage — clip reveal + scrubbed parallax (GSAP ScrollTrigger) */
/* ------------------------------------------------------------------ */
type ParallaxImageProps = Omit<ImageProps, "fill"> & {
  wrapperClassName?: string;
  strength?: number;
  reveal?: boolean;
};
export function ParallaxImage({ wrapperClassName = "", strength = 12, reveal = true, className = "", alt, ...img }: ParallaxImageProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  useScrollAnimation(
    () => {
      if (!wrap.current || !inner.current || prefersReducedMotion()) return;
      gsap.fromTo(
        inner.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: { trigger: wrap.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
      if (reveal) {
        gsap.from(wrap.current, {
          clipPath: "inset(18% 12% 18% 12% round 28px)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: { trigger: wrap.current, start: "top 85%", once: true },
        });
      }
    },
    wrap
  );
  return (
    <div ref={wrap} className={`relative overflow-hidden grain ${wrapperClassName}`} style={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}>
      <div ref={inner} className="absolute inset-[-14%_0]" style={{ willChange: "transform" }}>
        <Image fill alt={alt} className={`object-cover ${className}`} {...img} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ScrubWords — words light up as you scroll                             */
/* ------------------------------------------------------------------ */
export function ScrubWords({ text, className = "", tone = "dark" }: { text: string; className?: string; tone?: "dark" | "light" }) {
  const ref = useRef<HTMLParagraphElement>(null);
  // Dim colours keep >= 3:1 contrast (WCAG large text) even before the words light up.
  const dim = tone === "dark" ? "#7e9185" : "#6a8576";
  const lit = tone === "dark" ? "#0e3b2c" : "#fbf4e6";
  useScrollAnimation(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      const words = ref.current.querySelectorAll("[data-w]");
      gsap.fromTo(
        words,
        { color: dim },
        {
          color: lit,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );
    },
    ref
  );
  return (
    <p ref={ref} className={className} style={{ color: lit }}>
      {text.split(" ").map((w, i) => (
        <span key={i} data-w className="inline-block mr-[0.25em]">
          {w}
        </span>
      ))}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — infinite ticker that reacts to scroll velocity              */
/* ------------------------------------------------------------------ */
export function Marquee({ children, speed = 40, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const track = useRef<HTMLDivElement>(null);
  useScrollAnimation(
    () => {
      if (!track.current || prefersReducedMotion()) return;
      const t = gsap.to(track.current, { xPercent: -50, duration: speed, ease: "none", repeat: -1 });
      t.totalTime(speed * 500); // start deep into the loop so reversing never hits time 0
      const st = ScrollTrigger.create({
        onUpdate(self) {
          const dir = self.direction;
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 300, 5);
          gsap.to(t, {
            timeScale: dir * boost,
            duration: 0.2,
            overwrite: true,
            onComplete: () => {
              gsap.to(t, { timeScale: dir, duration: 1.2 });
            },
          });
        },
      });
      return () => st.kill();
    },
    track
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={track} className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Counter — counts up when in view                                      */
/* ------------------------------------------------------------------ */
export function Counter({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
