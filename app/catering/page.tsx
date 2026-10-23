import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import CateringMenuTabs from "@/components/catering/CateringMenuTabs";
import StepsLine from "@/components/catering/StepsLine";
import QuoteForm from "@/components/catering/QuoteForm";
import { FadeUp, ParallaxImage, RevealText } from "@/components/motion";
import { Briefcase, Calendar, CheckCircle, Clipboard, Confetti, Gift, Halal, Headset, Leaf, People, Utensils } from "@/components/Icons";
import { cateringOccasions, cateringPackages, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Halal Indian & Pakistani catering in Medellín for family gatherings, corporate events, parties and private celebrations. Request a catering quote from Chapati Halal.",
  alternates: { canonical: "/catering" },
};

const heroTags = [
  { icon: People, label: "Family Gatherings" },
  { icon: Briefcase, label: "Corporate Events" },
  { icon: Confetti, label: "Parties & Celebrations" },
  { icon: Gift, label: "Special Occasions" },
];
const occasionIcon = { people: People, briefcase: Briefcase, confetti: Confetti, gift: Gift } as const;

const steps = [
  { icon: Calendar, title: "Tell us about your event", text: "Share the date, guest count and location." },
  { icon: Clipboard, title: "Choose your menu", text: "Discuss dishes, quantities and any dietary preferences." },
  { icon: CheckCircle, title: "Confirm your order", text: "Finalise the quote, pickup or delivery arrangements and payment details." },
];

const why = [
  { icon: Halal, title: "Halal Indian & Pakistani cuisine" },
  { icon: Leaf, title: "Freshly prepared food" },
  { icon: People, title: "Options for different group sizes" },
  { icon: Utensils, title: "Menus for different preferences" },
  { icon: Headset, title: "Friendly catering coordination" },
];

export default function CateringPage() {
  return (
    <>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="jaali relative overflow-hidden pb-16 pt-[calc(var(--header-h)+2.5rem)] text-cream md:pb-24">
        <div className="container-x relative grid items-center gap-12 md:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="relative z-10">
            <p className="eyebrow hero-in flex items-center gap-3 text-saffron" style={{ animationDelay: "0.05s" }}>
              <span className="h-px w-10 bg-saffron" aria-hidden />
              Catering services
            </p>
            <h1 className="font-display mt-5 text-[clamp(2.8rem,6.6vw,6.4rem)] font-medium leading-[0.96]">
              <span className="split-line block">
                <span className="hero-line block" style={{ animationDelay: "0.1s" }}>
                  Make every
                </span>
              </span>
              <span className="split-line block">
                <span className="hero-line block" style={{ animationDelay: "0.18s" }}>
                  gathering
                </span>
              </span>
              <span className="split-line block">
                <span className="hero-line font-italic-display block text-saffron" style={{ animationDelay: "0.26s" }}>
                  delicious.
                </span>
              </span>
            </h1>
            <p className="hero-in mt-7 max-w-lg text-lg leading-relaxed text-mint" style={{ animationDelay: "0.4s" }}>
              Bring the rich flavours of authentic Indian and Pakistani cuisine to your next event with halal catering from Chapati Halal.
            </p>
            <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.5s" }}>
              <Button href="#quote">Request a Catering Quote</Button>
              <Button href="#catering-menu" variant="ghost-light">
                Explore Catering Menu
              </Button>
            </div>
            <ul className="hero-in mt-12 grid max-w-xl grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4" style={{ animationDelay: "0.65s" }}>
              {heroTags.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center gap-2 text-center text-xs font-semibold text-cream/90">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-saffron/50 text-saffron">
                    <Icon size={22} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="hero-img relative aspect-[4/4.4]">
              <div className="arch grain relative h-full w-full overflow-hidden">
                <Image src="/images/cat-hero.jpg" alt="Catering buffet with trays of biryani, curries and fresh bread" fill priority fetchPriority="high" sizes="(min-width:768px) 44vw, 92vw" className="hero-zoom object-cover" />
              </div>
            </div>
            <div className="hero-in absolute -left-3 bottom-8 rounded-2xl bg-cream p-4 pr-6 text-forest shadow-2xl md:-left-10" style={{ animationDelay: "0.85s" }}>
              <p className="eyebrow text-[0.6rem] text-saffron-ink">From</p>
              <p className="font-display text-3xl leading-none">10 to 100+</p>
              <p className="mt-1 text-sm text-muted">guests, fully halal</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- Occasions --------------------------- */}
      <Suspense>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-saffron-ink">Perfect for every occasion</p>
            <RevealText className="font-display mt-4 text-[clamp(2.3rem,5vw,4.4rem)] font-medium leading-none text-forest">
              Catering for <span className="font-italic-display text-saffron-ink">every occasion</span>
            </RevealText>
            <p className="mt-5 text-muted">
              Whether it&apos;s a family get-together, corporate event, birthday celebration or a special occasion, Chapati Halal brings authentic flavours and a memorable dining experience to your event.
            </p>
          </div>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cateringOccasions.map((o, i) => {
              const Icon = occasionIcon[o.icon];
              return (
                <FadeUp as="li" key={o.title} delay={i * 0.08} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] grain">
                    <Image src={o.img} alt={o.title} fill sizes="(min-width:1024px) 23vw, (min-width:640px) 46vw, 92vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110" />
                  </div>
                  <div className="relative -mt-8 px-5 text-center">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-cream bg-forest text-saffron transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                      <Icon size={26} />
                    </span>
                    <h3 className="font-display mt-3 text-2xl text-forest">{o.title}</h3>
                    <p className="mt-1 text-sm text-muted">{o.text}</p>
                  </div>
                </FadeUp>
              );
            })}
          </ul>
        </div>
      </section>
      </Suspense>

      {/* ----------------------------- Menu ----------------------------- */}
      <Suspense>
      <section id="catering-menu" className="jaali scroll-mt-20 py-24 text-cream md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-saffron">Our catering menu</p>
            <RevealText className="font-display mt-4 text-[clamp(2.3rem,5vw,4.4rem)] font-medium leading-none">
              Authentic flavours, <span className="font-italic-display text-saffron">freshly prepared</span>
            </RevealText>
            <p className="mt-5 text-mint">Choose from our most popular Indian and Pakistani dishes. Our catering menu works for groups of all sizes.</p>
          </div>
          <div className="mt-12">
            <CateringMenuTabs />
          </div>
        </div>
      </section>
      </Suspense>

      {/* --------------------------- Packages --------------------------- */}
      <Suspense>
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-saffron-ink">Catering packages</p>
            <RevealText className="font-display mt-4 text-[clamp(2.3rem,5vw,4.4rem)] font-medium leading-none text-forest">
              Options for <span className="font-italic-display text-saffron-ink">every gathering</span>
            </RevealText>
            <p className="mt-5 text-muted">Simple, flexible catering options to suit your event. Need something custom? We&apos;re happy to create a menu tailored to your needs.</p>
          </div>
          <ul className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
            {cateringPackages.map((p, i) => (
              <FadeUp
                as="li"
                key={p.name}
                delay={i * 0.1}
                className={`relative flex flex-col rounded-[28px] border p-7 text-center transition-transform duration-500 hover:-translate-y-2 ${
                  p.popular ? "border-saffron bg-[#eef1e0] shadow-[0_40px_80px_-40px_rgba(14,59,44,.45)] md:-translate-y-4 md:hover:-translate-y-6" : "border-forest/10 bg-cream"
                }`}
              >
                {p.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-saffron px-4 py-1 text-xs font-extrabold text-ink">Most popular</span>}
                <People size={40} className="mx-auto text-forest" />
                <h3 className="font-display mt-4 text-3xl text-forest">{p.name}</h3>
                <p className="mt-1 text-sm font-bold text-saffron-ink">{p.guests}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
                <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-[18px] grain">
                  <Image src={p.img} alt="" fill sizes="(min-width:768px) 30vw, 92vw" className="object-cover" />
                </div>
                <div className="mt-6">
                  <Button href={p.href} variant={p.popular ? "saffron" : "forest"} className="w-full">
                    {p.cta}
                  </Button>
                </div>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>
      </Suspense>

      {/* ------------------------- How it works ------------------------- */}
      <Suspense>
      <section className="jaali py-24 text-cream md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-saffron">How catering works</p>
            <RevealText className="font-display mt-4 text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-none">
              Simple, delicious and <span className="font-italic-display text-saffron">hassle-free</span>
            </RevealText>
          </div>
          <div className="relative mt-16">
            <StepsLine />
          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-6">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <FadeUp as="li" key={title} delay={i * 0.15} className="relative flex flex-col items-center text-center">
                <span className="relative grid h-20 w-20 place-items-center rounded-full border-2 border-saffron bg-forest text-saffron">
                  <Icon size={32} />
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-saffron text-xs font-extrabold text-ink">{i + 1}</span>
                </span>
                <h3 className="font-display mt-6 text-2xl">{title}</h3>
                <p className="mt-2 max-w-xs text-sm text-mint">{text}</p>
              </FadeUp>
            ))}
          </ol>
          </div>
        </div>
      </section>
      </Suspense>

      {/* ---------------------------- Why us ---------------------------- */}
      <Suspense>
      <section aria-labelledby="why-cat" className="border-b border-forest/10 bg-cream-2/50 py-16 md:py-20">
        <div className="container-x">
          <p className="eyebrow text-center text-saffron-ink">Why choose Chapati Halal?</p>
          <h2 id="why-cat" className="font-display mt-3 text-center text-[clamp(2rem,4vw,3.4rem)] text-forest">
            Authentic food. <span className="font-italic-display text-saffron-ink">Memorable events.</span>
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-forest/10 [&>li:last-child]:col-span-2 sm:[&>li:last-child]:col-span-1">
            {why.map(({ icon: Icon, title }, i) => (
              <FadeUp as="li" key={title} delay={i * 0.06} className="flex flex-col items-center px-4 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-forest/20 text-forest">
                  <Icon size={28} />
                </span>
                <h3 className="mt-4 max-w-[16ch] font-bold text-forest">{title}</h3>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>
      </Suspense>

      {/* ----------------------------- Quote ----------------------------- */}
      <Suspense>
      <section id="quote" className="jaali scroll-mt-16 text-cream">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <ParallaxImage src="/images/cat-quote.jpg" alt="Chafing dishes of biryani and curries set out for an event" sizes="(min-width:1024px) 45vw, 100vw" wrapperClassName="min-h-[320px] lg:min-h-full" />
          <div className="container-x py-20 lg:px-16 lg:py-28">
            <p className="eyebrow text-saffron">Let&apos;s plan your catering</p>
            <RevealText className="font-display mt-4 text-[clamp(2.3rem,4.6vw,4.2rem)] font-medium leading-none">
              Request a <span className="font-italic-display text-saffron">catering quote</span>
            </RevealText>
            <p className="mt-4 max-w-lg text-mint">
              Tell us a little about your event and we&apos;ll help you plan the perfect menu. Prefer to talk?{" "}
              <a href={site.phoneHref} className="font-bold text-saffron underline-offset-4 hover:underline">
                Call {site.phone}
              </a>
              .
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>
      </Suspense>
    </>
  );
}
