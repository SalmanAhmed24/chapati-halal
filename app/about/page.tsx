import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";
import { ParallaxImage, RevealText, FadeUp, ScrubWords } from "@/components/motion";
import { iconFor, Chef, Leaf, People } from "@/components/Icons";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story behind Chapati Halal — family recipes from India and Pakistan, 100% halal, cooked fresh every day.",
  alternates: { canonical: "/about" },
};

const pillars = [
  { img: "/images/g-biryani-2.jpg", title: "Authentic Taste", text: "A perfect blend of Indian and Pakistani flavours.", alt: "Plate of biryani" },
  { img: "/images/interior-dine.jpg", title: "Warm Atmosphere", text: "A cosy place to relax, share a meal and enjoy.", alt: "Dining room at dusk" },
  { img: "/images/g-naan.jpg", title: "Made with Care", text: "Every dish is prepared with love and attention.", alt: "Fresh naan" },
];

const philosophy = [
  { icon: Chef, title: "Traditional Recipes", text: "Time-honoured dishes from India & Pakistan" },
  { icon: Leaf, title: "Fresh Ingredients", text: "Quality ingredients in every dish" },
  { icon: Chef, title: "Experienced Chefs", text: "Passionate about authentic cuisine" },
  { icon: People, title: "Serving Our Community", text: "A place for everyone to feel at home" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        line1="More than just"
        line2="a restaurant."
        text="Chapati Halal — Cocina India Pakistan — brings together the rich culinary traditions of India and Pakistan. Authentic, halal dishes made with fresh ingredients, aromatic spices and time-honoured recipes."
        img="/images/hero-curry.jpg"
        alt="Copper karahi of chicken curry with rice, chapati and spices"
      >
        <Button href="#journey" variant="forest">
          Our Journey
        </Button>
      </PageHero>

      <section id="journey" className="py-24 md:py-32">
        <div className="container-x grid items-center gap-12 md:grid-cols-2 lg:gap-24">
          <ParallaxImage src="/images/storefront-night.jpg" alt="Chapati Halal storefront at night" sizes="(min-width:768px) 48vw, 92vw" wrapperClassName="aspect-[5/4] rounded-[28px]" />
          <div>
            <p className="eyebrow text-saffron-ink">About Chapati Halal</p>
            <RevealText className="font-display mt-4 text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-none text-forest">
              Our <span className="font-italic-display text-saffron-ink">story</span>
            </RevealText>
            <FadeUp>
              <p className="mt-7 text-lg leading-relaxed text-muted">
                Chapati Halal was born from a love for authentic Indian and Pakistani cuisine and a desire to share these rich flavours with our
                community. What started as a passion for home-cooked meals has grown into a restaurant where families and friends come together to
                enjoy delicious, halal food in a warm and welcoming environment.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Our menu features a variety of traditional dishes, crafted with care using the finest ingredients and authentic spices. Every dish
                we serve is a reflection of our heritage, our culture, and our commitment to quality.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="jaali py-24 text-cream md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <RevealText className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-none">
              Our mission <span className="font-italic-display text-saffron">&amp; values</span>
            </RevealText>
            <p className="mt-5 text-mint">We are dedicated to an exceptional dining experience through great food, genuine hospitality, and a commitment to our community.</p>
          </div>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = iconFor[v.icon];
              return (
                <FadeUp as="li" key={v.title} delay={i * 0.08} className="group bg-forest p-8 transition-colors duration-500 hover:bg-forest-deep">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-saffron/60 text-saffron transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    <Icon size={28} />
                  </span>
                  <h3 className="font-display mt-6 text-2xl">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mint">{v.text}</p>
                </FadeUp>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-saffron-ink">The secret behind our food</p>
            <RevealText className="font-display mt-4 text-[clamp(2.4rem,5vw,4.4rem)] font-medium leading-[1] text-forest">
              Fresh ingredients. <span className="font-italic-display block text-saffron-ink">Traditional recipes.</span>
            </RevealText>
            <FadeUp>
              <p className="mt-7 text-lg leading-relaxed text-muted">
                We use only the freshest ingredients, carefully selected spices, and traditional cooking methods to bring you the true taste of India
                and Pakistan. From our flavourful biryani to rich curries and freshly baked chapati, every dish is made with passion and expertise.
              </p>
              <div className="mt-9">
                <Button href="/menu" variant="forest">
                  View Our Menu
                </Button>
              </div>
            </FadeUp>
          </div>
          <ParallaxImage src="/images/spices.jpg" alt="Turmeric, chilli, cardamom, cinnamon and peppercorns" sizes="(min-width:768px) 48vw, 92vw" wrapperClassName="arch aspect-[4/4.4]" />
        </div>

        <ul className="container-x mt-24 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeUp as="li" key={p.title} delay={i * 0.1} className="group overflow-hidden rounded-[24px] bg-cream-2/70">
              <div className="relative aspect-[16/10] overflow-hidden grain">
                <Image src={p.img} alt={p.alt} fill sizes="(min-width:768px) 31vw, 92vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-forest">{p.title}</h3>
                <p className="mt-2 text-muted">{p.text}</p>
              </div>
            </FadeUp>
          ))}
        </ul>
      </section>

      <section className="jaali overflow-hidden text-cream">
        <div className="grid md:grid-cols-2">
          <ParallaxImage src="/images/chef.jpg" alt="Our chef seasoning a dish" sizes="(min-width:768px) 50vw, 100vw" wrapperClassName="min-h-[360px] md:min-h-[620px]" />
          <div className="container-x flex flex-col justify-center py-20 md:px-16">
            <p className="eyebrow text-saffron">Our chef&apos;s philosophy</p>
            <RevealText className="font-display mt-4 text-[clamp(2.3rem,4.6vw,4.2rem)] font-medium leading-none">
              Bringing tradition <span className="font-italic-display text-saffron">to your plate.</span>
            </RevealText>
            <ScrubWords
              tone="light"
              className="mt-8 max-w-lg text-2xl leading-relaxed"
              text="Our chefs combine traditional recipes with years of experience to create dishes full of flavour, aroma and authenticity. We believe food is more than a meal — it's a way to bring people together."
            />
          </div>
        </div>
      </section>

      <section aria-label="What we stand for" className="border-b border-forest/10 bg-cream-2/50">
        <ul className="container-x grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4 lg:divide-x lg:divide-forest/10">
          {philosophy.map(({ icon: Icon, title, text }, i) => (
            <FadeUp as="li" key={title} delay={i * 0.07} className="flex flex-col items-center px-4 text-center">
              <Icon size={34} className="text-forest" />
              <h3 className="mt-4 font-bold text-forest">{title}</h3>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </FadeUp>
          ))}
        </ul>
      </section>

      <CTABand title="Experience the true taste of" accent="India & Pakistan." text="Join us for a memorable dining experience. Order online, visit us, or call for takeout and delivery." />
    </>
  );
}
