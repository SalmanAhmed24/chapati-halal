type Props = { className?: string; tone?: "light" | "dark"; withTagline?: boolean };

/** Chapati Halal oval badge, drawn in SVG so it stays crisp at every size. */
export default function Logo({ className = "", tone = "dark", withTagline = false }: Props) {
  const ring = tone === "dark" ? "#0e3b2c" : "#fbf4e6";
  return (
    <span className={`inline-flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
        <defs>
          <linearGradient id="lg-oval" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#24855a" />
            <stop offset="1" stopColor="#0e4a33" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="55" rx="97" ry="52" fill={ring} />
        <ellipse cx="100" cy="55" rx="91" ry="46" fill="#fbf4e6" />
        <ellipse cx="100" cy="55" rx="86" ry="41" fill="url(#lg-oval)" />
        <g stroke="#f5a54a" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M70 26 Q100 18 130 26" />
          <path d="M82 22 l-4 -5 M92 20 l-3 -6 M102 19.5 l-1 -6 M112 20 l2 -6 M122 22 l4 -5" />
        </g>
        <text x="100" y="64" textAnchor="middle" fill="#fbf4e6" fontFamily="var(--font-fraunces-italic), Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="38" letterSpacing="-1">
          Chapati
        </text>
        <text x="100" y="84" textAnchor="middle" fill="#fbf4e6" fontFamily="var(--font-fraunces-italic), Georgia, serif" fontStyle="italic" fontWeight="600" fontSize="15">
          Halal
        </text>
      </svg>
      {withTagline && (
        <span className={`mt-1 text-[0.58rem] font-bold tracking-[0.28em] uppercase ${tone === "dark" ? "text-leaf" : "text-saffron-soft"}`}>
          Cocina India Pakistan
        </span>
      )}
    </span>
  );
}
