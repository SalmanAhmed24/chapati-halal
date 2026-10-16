import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export const Arrow = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Leaf = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M5 19c0-8 5-14 15-14 0 9-6 15-14 15" /><path d="M5 19c4-4 7-6 10-8" /></svg>
);
export const Halal = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M16.5 4.5a8 8 0 1 0 3 9.5 6.3 6.3 0 1 1-3-9.5Z" /><path d="m17.5 8 .6 1.4 1.5.1-1.2 1 .4 1.5-1.3-.8-1.3.8.4-1.5-1.2-1 1.5-.1Z" /></svg>
);
export const People = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3.5 19c.6-3.3 2.8-5 5.5-5s4.9 1.7 5.5 5M14.5 14.3c.8-.4 1.6-.6 2.5-.6 2.1 0 3.6 1.3 4 3.8" /></svg>
);
export const Hand = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M3 15h3l4 2h5a2 2 0 0 0 0-4h-3" /><path d="M6 15v5H3M12 13l5.5-2.5a2 2 0 0 1 2 3.4L14 18.5" /><path d="M14 9c-2-1-2.5-3.5-1-6 2.5 1 3 4 1 6Z" /></svg>
);
export const Chef = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M7 14v6h10v-6" /><path d="M7 14a4 4 0 1 1 1.5-7.7A4 4 0 0 1 16 6a3.5 3.5 0 1 1 1 8H7Z" /><path d="M7 17h10" /></svg>
);
export const Pin = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const Phone = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const Mail = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Clock = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Bag = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
);
export const Star = ({ size, ...p }: P) => (
  <svg {...base(size)} fill="currentColor" stroke="none" {...p}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" /></svg>
);
export const Chili = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M14 6c-4 1-9 6-10 13 6-1 13-5 14-10" /><path d="M14 6c1-2 3-3 5-2" /></svg>
);
export const Close = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);

export const Social = {
  Facebook: (p: P) => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M13.5 21v-7.5H16l.4-3H13.5V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" /></svg>
  ),
  Instagram: (p: P) => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".8" fill="currentColor" /></svg>
  ),
  TikTok: (p: P) => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M16.6 3c.4 2.2 1.8 3.6 4 3.8v3.1c-1.5 0-2.8-.4-4-1.2v6.1A5.8 5.8 0 1 1 10.8 9v3.2a2.7 2.7 0 1 0 2.7 2.7V3h3.1Z" /></svg>
  ),
  YouTube: (p: P) => (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" /></svg>
  ),
};

export const iconFor = { leaf: Leaf, halal: Halal, people: People, hand: Hand, chef: Chef } as const;
