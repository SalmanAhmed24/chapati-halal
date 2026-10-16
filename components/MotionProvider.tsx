"use client";
import { LazyMotion, MotionConfig } from "framer-motion";

// Animation features are code-split and fetched after first paint, keeping the critical bundle lean.
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
