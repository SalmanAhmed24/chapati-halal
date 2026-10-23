import Image from "next/image";
import Button from "../Button";
import HeroDecor from "../HeroDecor";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-h)+1.5rem)] pb-14 md:min-h-[100svh] md:pb-20">
      <HeroDecor />
      <div className="container-x relative grid items-center gap-12 md:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div className="relative z-10">
          <p className="eyebrow hero-in flex items-center gap-3 text-leaf" style={{ animationDelay: "0.05s" }}>
            <span className="h-px w-10 bg-leaf" aria-hidden />
            {site.tagline}
          </p>
          <h1 className="font-display mt-6 text-[clamp(2.7rem,6.4vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.035em] text-forest">
            <span className="split-line block">
              <span className="hero-line block" style={{ animationDelay: "0.1s" }}>
                Authentic Halal
              </span>
            </span>
            <span className="split-line block">
              <span className="hero-line block" style={{ animationDelay: "0.18s" }}>
                Indian &amp; Pakistani
              </span>
            </span>
            <span className="split-line block">
              <span className="hero-line font-italic-display block text-saffron-ink" style={{ animationDelay: "0.26s" }}>
                cuisine.
              </span>
            </span>
          </h1>
          <p className="hero-in mt-8 max-w-md text-lg leading-relaxed text-muted" style={{ animationDelay: "0.4s" }}>
            A perfect blend of rich spices, traditional recipes and warm hospitality. Fresh, 100% halal food — made with love in the heart of
            El Poblado, Medellín.
          </p>
          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.5s" }}>
            <Button href={site.orderUrl}>Order Online</Button>
            <Button href="/menu" variant="ghost-dark">
              View Our Menu
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="hero-img relative aspect-[4/4.6]">
            <div className="arch relative h-full w-full overflow-hidden bg-forest">
              <Image
                src="/images/hero-main.jpg"
                alt="Beef biryani in a copper karahi with raita, salad and fresh naan"
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 44vw, 92vw"
                className="hero-zoom object-cover object-[62%_50%]"
              />
            </div>
          </div>

          {/* Rotating badge */}
          <div className="hero-in absolute -left-4 bottom-10 grid h-32 w-32 place-items-center rounded-full bg-forest text-cream shadow-2xl md:-left-12 md:h-40 md:w-40" style={{ animationDelay: "0.7s" }}>
            <svg viewBox="0 0 160 160" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <path id="badge-circle" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
              </defs>
              <text fill="#f5a54a" fontSize="12.5" fontWeight="700" letterSpacing="3.2">
                <textPath href="#badge-circle">100% HALAL • FRESH CHAPATI DAILY • </textPath>
              </text>
            </svg>
            <span className="font-display text-center text-3xl leading-none md:text-4xl">
              100<span className="text-saffron">%</span>
              <span className="mt-1 block font-sans text-[0.6rem] font-bold uppercase tracking-[0.2em]">Halal</span>
            </span>
          </div>

          {/* Floating special card */}
          <div className="hero-in absolute -right-2 top-12 hidden rounded-2xl bg-cream/95 p-4 pr-6 shadow-[0_20px_60px_-20px_rgba(14,59,44,.5)] backdrop-blur sm:block md:-right-6" style={{ animationDelay: "0.85s" }}>
            <p className="eyebrow text-[0.6rem] text-saffron-ink">Today&apos;s special</p>
            <p className="font-display mt-1 text-xl text-forest">Beef Biryani</p>
            <p className="text-sm text-muted">Dum-cooked · serves one</p>
          </div>
        </div>
      </div>

      <div className="hero-in container-x mt-12 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-muted md:flex" style={{ animationDelay: "1s" }} aria-hidden>
        <span className="relative h-10 w-[22px] rounded-full border-2 border-forest/30">
          <span className="absolute left-1/2 top-2 h-2 w-[3px] -translate-x-1/2 animate-bounce rounded-full bg-saffron" />
        </span>
        Scroll to taste
      </div>
    </section>
  );
}
