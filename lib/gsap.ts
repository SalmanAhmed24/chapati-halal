"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  gsap.defaults({ ease: "expo.out", duration: 1.1 });
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type IdleHandle = number;
const ric: (cb: () => void) => IdleHandle =
  typeof window !== "undefined" && "requestIdleCallback" in window
    ? (cb) => window.requestIdleCallback(cb, { timeout: 1200 })
    : (cb) => window.setTimeout(cb, 120);
const cic = (h: IdleHandle) => {
  if (typeof window === "undefined") return;
  if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(h);
  else clearTimeout(h);
};

let refreshTimer: number | undefined;
const queueRefresh = () => {
  window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
};

/**
 * Sets up scroll-driven GSAP animations once the browser is idle, so they never
 * block hydration or first paint. Everything created inside is scoped & reverted on unmount.
 */
export function useScrollAnimation(setup: () => void | (() => void), scope: React.RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let ctx: gsap.Context | undefined;
    const handle = ric(() => {
      ctx = gsap.context(setup, scope.current ?? undefined);
      queueRefresh();
    });
    return () => {
      cic(handle);
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
