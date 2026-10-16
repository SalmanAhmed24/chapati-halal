import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";
import ContactForm from "@/components/contact/ContactForm";
import { FadeUp, RevealText } from "@/components/motion";
import { Bag, Chef, Clock, Halal, Mail, People, Phone, Pin } from "@/components/Icons";
import { locations, site, weeklyHours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions, feedback or special requests? Call, email or message Chapati Halal — we usually reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: Phone, title: "Call Us", value: site.phone, href: site.phoneHref, note: "Happy to help with orders and enquiries." },
  { icon: Mail, title: "Email Us", value: site.email, href: `mailto:${site.email}`, note: "We usually respond within 24 hours." },
  { icon: Pin, title: "Visit Us", value: locations[0].address, href: "/locations", note: "Come and enjoy an authentic dining experience." },
  { icon: Bag, title: "Order Online", value: "Pickup or delivery", href: site.orderUrl, note: "Your favourite dishes, from the comfort of home." },
];

const why = [
  { icon: Chef, title: "Authentic Cuisine", text: "Traditional Indian & Pakistani flavours" },
  { icon: People, title: "Family Friendly", text: "A warm and welcoming environment" },
  { icon: Halal, title: "Halal Food", text: "Prepared with care" },
  { icon: Pin, title: "Convenient Locations", text: "Easy to find, with ample parking" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        line1="We'd love to"
        line2="hear from you."
        text="Have a question, feedback, or a special request? We're here to help. Reach out, or visit us for an authentic Indian & Pakistani dining experience."
        img="/images/interior-dine.jpg"
        alt="Evening dining room with warm pendant lights"
      >
        <Button href="#write" variant="forest">
          Send a Message
        </Button>
      </PageHero>

      <section className="jaali text-cream">
        <ul className="container-x grid gap-px py-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, value, href, note }, i) => (
            <FadeUp as="li" key={title} delay={i * 0.08} className="p-6 text-center">
              <a href={href} className="group block">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-saffron/60 text-saffron transition-colors duration-500 group-hover:bg-saffron group-hover:text-ink">
                  <Icon size={26} />
                </span>
                <h2 className="font-display mt-4 text-2xl">{title}</h2>
                <p className="mt-1 font-semibold">{value}</p>
                <p className="mt-2 text-sm text-mint">{note}</p>
              </a>
            </FadeUp>
          ))}
        </ul>
      </section>

      <section id="write" className="scroll-mt-24 py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <RevealText className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-none text-forest">
              Opening <span className="font-italic-display text-saffron-ink">hours</span>
            </RevealText>
            <p className="mt-4 text-muted">We look forward to serving you — hours apply to all locations.</p>
            <FadeUp>
              <dl className="mt-8 divide-y divide-forest/10 rounded-[22px] bg-cream-2/80 px-6 py-2">
                {weeklyHours.map((h) => (
                  <div key={h.day} className="flex justify-between py-3.5">
                    <dt className="font-semibold text-forest">{h.day}</dt>
                    <dd className="text-muted">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[22px] grain">
                <Image src="/images/storefront-night.jpg" alt="Chapati Halal storefront at night" fill sizes="(min-width:1024px) 40vw, 92vw" className="object-cover" />
              </div>
            </FadeUp>
          </div>
          <div className="rounded-[28px] border border-forest/10 bg-cream p-6 shadow-[0_40px_80px_-50px_rgba(14,59,44,.5)] md:p-10">
            <RevealText className="font-display text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none text-forest">
              Send us a <span className="font-italic-display text-saffron-ink">message</span>
            </RevealText>
            <p className="mt-3 text-muted">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="why-h" className="border-y border-forest/10 bg-cream-2/50 py-16">
        <div className="container-x">
          <h2 id="why-h" className="font-display text-center text-[clamp(2rem,4vw,3.2rem)] text-forest">
            Why visit <span className="font-italic-display text-saffron-ink">us?</span>
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-forest/10">
            {why.map(({ icon: Icon, title, text }, i) => (
              <FadeUp as="li" key={title} delay={i * 0.07} className="flex flex-col items-center px-4 text-center">
                <Icon size={34} className="text-forest" />
                <h3 className="mt-4 font-bold text-forest">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <CTABand secondary={{ href: site.phoneHref, label: "Call Us" }} />
    </>
  );
}
