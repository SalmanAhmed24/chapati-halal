"use client";
import Image from "next/image";
import { useRef } from "react";
import { signatureDishes } from "@/lib/data";
import { gsap, useScrollAnimation, prefersReducedMotion } from "@/lib/gsap";
import { RevealText } from "../motion";
import Button from "../Button";

/** Pinned horizontal gallery on desktop; native swipe carousel on touch/mobile. */
export default function SignatureScroll() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useScrollAnimation(
    () => {
      if (prefersReducedMotion()) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
          },
        });
        // Each card's image counter-moves for depth
        gsap.utils.toArray<HTMLElement>("[data-card-img]").forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: { trigger: img, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
            }
          );
        });
      });
      return () => mm.revert();
    },
    section
  );

  // The wrapper div keeps React's DOM ownership intact when ScrollTrigger inserts its pin-spacer.
  return (
    <div>
    <section ref={section} className="jaali relative overflow-hidden text-cream lg:h-[100svh]">
      <div className="flex h-full flex-col justify-center py-20 lg:py-0">
        <div className="container-x flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-saffron">Our specialities</p>
            <RevealText as="h2" className="font-display mt-4 text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-none">
              Popular <span className="font-italic-display text-saffron">dishes</span>
            </RevealText>
          </div>
          <Button href="/menu" variant="ghost-light">
            View Full Menu
          </Button>
        </div>

        <div
          ref={track}
          className="no-scrollbar mt-12 flex scroll-px-[var(--gutter)] snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--gutter)] pb-4 lg:snap-none lg:overflow-visible lg:pb-0"
          data-lenis-prevent-touch
        >
          {signatureDishes.map((d, i) => (
            <article
              key={d.name}
              data-cursor="Taste"
              className="group relative w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[min(30vw,440px)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] grain">
                <div data-card-img className="absolute inset-[0_-10%]">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />
                {d.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-bold text-forest">{d.tag}</span>
                )}
                <span className="font-display absolute right-5 top-3 text-5xl text-cream/80">0{i + 1}</span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl">{d.name}</h3>
                  <p className="mt-2 max-w-[30ch] text-sm text-mint">{d.desc}</p>
                  <p className="mt-4 inline-block rounded-full bg-saffron px-4 py-1.5 text-sm font-extrabold text-ink">{d.price}</p>
                </div>
              </div>
            </article>
          ))}
          <div className="hidden w-[10vw] shrink-0 lg:block" aria-hidden />
        </div>

        <div className="container-x mt-10 hidden lg:block" aria-hidden>
          <div className="h-[2px] w-full bg-cream/15">
            <div ref={bar} className="h-full origin-left scale-x-0 bg-saffron" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
