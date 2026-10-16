"use client";
import { m } from "framer-motion";
import { useEffect, useState } from "react";

let firstLoad = true;

/** Page transition: a two-tone curtain lifts off each newly navigated page. Skipped on first load. */
export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => !firstLoad);
  useEffect(() => {
    firstLoad = false;
  }, []);

  return (
    <>
      {animate && (
        <>
          <m.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[90] origin-top bg-saffron"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          <m.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[91] origin-top bg-forest"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
          />
        </>
      )}
      {children}
    </>
  );
}
