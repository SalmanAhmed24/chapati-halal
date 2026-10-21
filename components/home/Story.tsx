import { ParallaxImage, RevealText, FadeUp, Counter } from "../motion";
import Button from "../Button";

const stats = [
  { to: 6, suffix: "", label: "Days a week, fresh" },
  { to: 40, suffix: "+", label: "Dishes on the menu" },
  { to: 100, suffix: "%", label: "Halal, always" },
  { to: 12000, suffix: "+", label: "Chapati baked monthly" },
];

export default function Story() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 lg:gap-24">
        <div className="relative">
          <ParallaxImage
            src="/images/storefront-night.jpg"
            alt="The Chapati Halal terrace glowing at night"
            sizes="(min-width: 768px) 48vw, 92vw"
            wrapperClassName="aspect-[4/5] rounded-[28px]"
          />
          <FadeUp delay={0.2} className="absolute -bottom-8 -right-3 w-40 overflow-hidden rounded-2xl border-[6px] border-cream shadow-xl md:-right-10 md:w-52">
            <ParallaxImage src="/images/spices.jpg" alt="Bowls of whole and ground spices" sizes="208px" wrapperClassName="aspect-square" reveal={false} strength={6} />
          </FadeUp>
        </div>

        <div>
          <p className="eyebrow text-saffron-ink">Our story</p>
          <RevealText as="h2" className="font-display mt-4 text-[clamp(2.4rem,5vw,4.6rem)] font-medium leading-[1] text-forest">
            More than just <span className="font-italic-display text-saffron-ink">a restaurant.</span>
          </RevealText>
          <FadeUp>
            <p className="mt-7 text-lg leading-relaxed text-muted">
              Chapati Halal was born from a love for authentic Indian and Pakistani cuisine and a desire to share these rich flavours with our
              community. What started as a passion for home-cooked meals has grown into a place where families and friends come together to
              enjoy delicious, halal food in a warm and welcoming room.
            </p>
            <div className="mt-9">
              <Button href="/about" variant="forest">
                Our Journey
              </Button>
            </div>
          </FadeUp>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-forest/15 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter to={s.to} suffix={s.suffix} className="font-display block text-5xl text-forest" />
                  <span className="mt-1 block text-sm text-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
