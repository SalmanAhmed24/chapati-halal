import Button from "../Button";
import { FadeUp, ParallaxImage, RevealText } from "../motion";
import { Briefcase, Calendar, Confetti, People } from "../Icons";

const tags = [
  { icon: People, label: "Family Gatherings" },
  { icon: Briefcase, label: "Corporate Events" },
  { icon: Confetti, label: "Parties & Celebrations" },
  { icon: Calendar, label: "Special Occasions" },
];

/** Home-page teaser for the Catering page. */
export default function CateringBanner() {
  return (
    <section aria-labelledby="home-catering-h" className="relative overflow-hidden bg-cream-2/60">
      <div className="grid items-stretch lg:grid-cols-[1fr_1.15fr]">
        <div className="container-x relative z-10 py-20 lg:py-24 lg:pr-4 xl:pl-[max(var(--gutter),calc((100vw-1440px)/2+var(--gutter)))]">
          <p className="eyebrow flex items-center gap-4 text-forest">
            <span className="h-px w-10 bg-saffron-ink" aria-hidden />
            Catering services
            <span className="h-px w-10 bg-saffron-ink" aria-hidden />
          </p>
          <RevealText as="h2" className="font-display mt-5 text-[clamp(2.5rem,5.4vw,5rem)] font-medium leading-[0.98] text-forest">
            <span id="home-catering-h">
              Make your gathering <span className="font-italic-display text-saffron-ink">delicious.</span>
            </span>
          </RevealText>
          <FadeUp>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Bring the rich flavours of authentic Indian and Pakistani cuisine to your next event with halal catering from Chapati Halal.
            </p>
          </FadeUp>
          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-forest/15">
            {tags.map(({ icon: Icon, label }, i) => (
              <FadeUp as="li" key={label} delay={0.1 + i * 0.07} className="flex flex-col items-center gap-2 px-2 text-center text-sm font-semibold text-forest">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-saffron/15 text-saffron-ink transition-transform duration-500 hover:-rotate-12 hover:scale-110">
                  <Icon size={26} />
                </span>
                {label}
              </FadeUp>
            ))}
          </ul>
          <FadeUp delay={0.2} className="mt-10">
            <Button href="/catering" variant="saffron">
              Explore Our Catering Service
            </Button>
          </FadeUp>
        </div>

        <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-0">
          {/* Green wave edge */}
          <svg aria-hidden viewBox="0 0 120 600" preserveAspectRatio="none" className="absolute inset-y-0 -left-px z-10 hidden h-full w-[110px] lg:block">
            <path d="M0 0H70C20 120 105 230 55 330C10 420 95 500 60 600H0Z" fill="#0e3b2c" />
            <path d="M0 0H48C0 120 85 230 35 330C-10 420 75 500 40 600H0Z" fill="#f6ecd9" />
          </svg>
          <svg aria-hidden viewBox="0 0 600 60" preserveAspectRatio="none" className="absolute inset-x-0 -top-px z-10 h-10 w-full lg:hidden">
            <path d="M0 0V40C150 70 300 10 450 30C520 40 570 50 600 35V0Z" fill="#0e3b2c" />
          </svg>
          <div className="absolute inset-0">
            <ParallaxImage
              src="/images/cat-banner.jpg"
              alt="Catering spread of biryani, butter chicken, samosas, naan and salads in chafing dishes"
              sizes="(min-width:1024px) 55vw, 100vw"
              wrapperClassName="h-full w-full"
              strength={8}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
