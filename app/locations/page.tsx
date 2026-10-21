import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";
import ContactForm from "@/components/contact/ContactForm";
import { FadeUp, RevealText } from "@/components/motion";
import { Clock, Mail, Phone, Pin } from "@/components/Icons";
import { locations, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Location",
  description: "Visit Chapati Halal at Centro Comercial Vega10, El Poblado, Medellín — address, opening hours, phone and directions.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  const l = locations[0];
  return (
    <>
      <PageHero
        eyebrow="Our location"
        line1="Find us in"
        line2="El Poblado."
        text="Authentic halal Indian & Pakistani cooking in the heart of Medellín. Drop in for a meal, pick up your order, or send us a message — we'd love to see you."
        img="/images/interior-warm.jpg"
        alt="Lantern-lit Chapati Halal dining room"
      >
        <Button href={l.mapsUrl} external variant="forest">
          Get Directions
        </Button>
      </PageHero>

      <section id="visit" className="scroll-mt-24 pb-24 md:pb-32">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: location */}
          <div>
            <p className="eyebrow text-saffron-ink">Visit us</p>
            <RevealText className="font-display mt-3 text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-none text-forest">
              Our <span className="font-italic-display text-saffron-ink">location</span>
            </RevealText>
            <FadeUp>
              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-[24px] grain">
                <Image src={l.img} alt={`${l.name} storefront`} fill sizes="(min-width:1024px) 46vw, 92vw" className="object-cover" />
              </div>
              <ul className="mt-8 space-y-4 text-lg text-muted">
                <li className="flex gap-3">
                  <Pin className="mt-1 shrink-0 text-saffron-ink" />
                  <a href={l.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                    {l.address}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-1 shrink-0 text-saffron-ink" />
                  <a href={site.phoneHref} className="hover:text-forest">
                    {l.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 shrink-0 text-saffron-ink" />
                  <a href={`mailto:${site.email}`} className="break-all hover:text-forest">
                    {site.email}
                  </a>
                </li>
              </ul>
              <div className="mt-8 rounded-[22px] bg-cream-2/80 p-6">
                <p className="flex items-center gap-2 font-bold text-forest">
                  <Clock size={20} /> Opening hours
                </p>
                <dl className="mt-4 divide-y divide-forest/10">
                  {l.hours.map((h) => (
                    <div key={h.days} className="flex justify-between py-2.5 text-sm">
                      <dt className="font-semibold text-forest">{h.days}</dt>
                      <dd className="text-muted">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={l.mapsUrl} external variant="forest">
                  Get Directions
                </Button>
                <Button href={site.orderUrl} variant="ghost-dark">
                  Order Online
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Right: message */}
          <div className="self-start rounded-[28px] border border-forest/10 bg-cream p-6 shadow-[0_40px_80px_-50px_rgba(14,59,44,.5)] md:p-10 lg:sticky lg:top-28">
            <RevealText className="font-display text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none text-forest">
              Send us a <span className="font-italic-display text-saffron-ink">message</span>
            </RevealText>
            <p className="mt-3 text-muted">Questions, bookings or special requests — we&apos;ll get back to you as soon as possible.</p>
            <ContactForm />
          </div>
        </div>
      </section>
      <CTABand secondary={{ href: site.phoneHref, label: "Call Us" }} />
    </>
  );
}
