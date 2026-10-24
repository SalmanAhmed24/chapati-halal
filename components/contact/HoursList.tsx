"use client";
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { weeklyHours } from "@/lib/data";

/** Weekly hours with today's row highlighted (in Medellín time). */
export default function HoursList() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    setToday(new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "America/Bogota" }).format(new Date()));
  }, []);

  return (
    <ul aria-label="Opening hours" className="mt-8 divide-y divide-forest/10 overflow-hidden rounded-[22px] bg-cream-2/80">
      {weeklyHours.map((h) => {
        const isToday = h.day === today;
        const closed = h.time.toLowerCase() === "closed";
        return (
          <li key={h.day} aria-current={isToday ? "date" : undefined} className="relative flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
            {isToday && <m.span layoutId="today" className="absolute inset-0 bg-forest" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
            <span className={`relative flex items-center gap-3 font-semibold ${isToday ? "text-cream" : "text-forest"}`}>
              {h.day}
              {isToday && <span className="rounded-full bg-saffron px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-ink">Today</span>}
            </span>
            <span className={`relative whitespace-nowrap text-sm sm:text-base ${isToday ? "text-mint" : closed ? "text-saffron-ink font-semibold" : "text-muted"}`}>{h.time}</span>
          </li>
        );
      })}
    </ul>
  );
}
