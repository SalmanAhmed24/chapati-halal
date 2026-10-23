import Image from "next/image";
import HeroDecor from "./HeroDecor";

type Props = {
  eyebrow: string;
  line1: string;
  line2: string;
  text: string;
  img: string;
  alt: string;
  children?: React.ReactNode;
  grain?: boolean;
  imgClassName?: string;
};

/** Shared hero for inner pages. Line reveal is pure CSS so it starts on first paint (good for LCP). */
export default function PageHero({ eyebrow, line1, line2, text, img, alt, children, grain = true, imgClassName = "" }: Props) {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+2.5rem)] pb-16 md:pb-24">
      <HeroDecor />
      <div className="container-x relative grid items-center gap-10 md:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow hero-in text-leaf" style={{ animationDelay: "0.05s" }}>
            {eyebrow}
          </p>
          <h1 className="font-display mt-5 text-[clamp(2.7rem,7vw,6.2rem)] font-medium leading-[0.98] text-forest">
            <span className="split-line block">
              <span className="hero-line block" style={{ animationDelay: "0.1s" }}>
                {line1}
              </span>
            </span>
            <span className="split-line block">
              <span className="hero-line font-italic-display block text-saffron-ink" style={{ animationDelay: "0.2s" }}>
                {line2}
              </span>
            </span>
          </h1>
          <p className="hero-in mt-7 max-w-lg text-lg leading-relaxed text-muted" style={{ animationDelay: "0.35s" }}>
            {text}
          </p>
          {children && (
            <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.45s" }}>
              {children}
            </div>
          )}
        </div>
        <div className="hero-img relative aspect-[4/3.4] md:aspect-[4/4.3]">
          <div className={`arch relative h-full w-full overflow-hidden ${grain ? "grain" : ""}`}>
            <Image src={img} alt={alt} fill priority sizes="(min-width: 768px) 46vw, 92vw" className={`hero-zoom object-cover ${imgClassName}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
