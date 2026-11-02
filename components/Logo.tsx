import Image from "next/image";
import logo from "@/public/logo.png";
import logoWhite from "@/public/logo-white.png";

type Props = { className?: string; tone?: "light" | "dark"; withTagline?: boolean; priority?: boolean };

/** Brand logo: green on light backgrounds, white on dark ones. */
export default function Logo({ className = "", tone = "dark", withTagline = false, priority = false }: Props) {
  return (
    <span className={`inline-flex flex-col items-start ${className}`}>
      <Image
        src={tone === "light" ? logoWhite : logo}
        alt=""
        aria-hidden
        priority={priority}
        sizes="(min-width: 640px) 180px, 140px"
        className="h-auto w-full"
      />
      {withTagline && (
        <span className={`mt-2 text-[0.62rem] font-bold uppercase tracking-[0.28em] ${tone === "dark" ? "text-leaf" : "text-saffron-soft"}`}>
          Cocina India Pakistan
        </span>
      )}
    </span>
  );
}
