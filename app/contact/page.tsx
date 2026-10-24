import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import ContactForm from "@/components/contact/ContactForm";
import HoursList from "@/components/contact/HoursList";
import { FadeUp, RevealText } from "@/components/motion";
import { Mail, Phone, Pin } from "@/components/Icons";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Chapati Halal in El Poblado, Medellín. Send us a message, find us on the map or check our opening hours.",
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Contact us"
        line1="We'd love to"
        line2="hear from you."
        text="Questions, feedback, bookings or special requests? Send us a message, give us a call or drop by our counter at Vega10 in El Poblado. We usually reply within 24 hours."
        img="/images/contact-hero.jpg"
        alt="The Chapati Halal counter with its illuminated sign, menu boards and food displays"
        grain={false}
        imgClassName="object-[52%_40%]"
      >
        <Button href="#message" variant="forest">
          Send a Message
        </Button>
        <Button href={site.phoneHref} variant="ghost-dark">
          {site.phone}
        </Button>
      </PageHero>

      {/* 2. Map + form */}
      <section id="message" className="scroll-mt-24 pb-24 md:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeUp className="flex flex-col">
            <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-[28px] border border-forest/10 bg-cream-2 shadow-[0_40px_80px_-50px_rgba(14,59,44,.5)] lg:min-h-[520px]">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 grid place-items-center text-center font-semibold text-forest"
              >
                <span className="flex flex-col items-center gap-2">
                  <Pin size={32} className="text-saffron-ink" />
                  Open in Google Maps
                </span>
              </a>
              <iframe
                title="Map showing Chapati Halal at Centro Comercial Vega10, El Poblado, Medellín"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <ul className="mt-6 grid gap-4 text-muted sm:grid-cols-[1.4fr_1fr]">
              <li className="flex gap-3">
                <Pin className="mt-0.5 shrink-0 text-saffron-ink" />
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                  {site.address}
                </a>
              </li>
              <li className="space-y-3">
                <a href={site.phoneHref} className="flex gap-3 hover:text-forest">
                  <Phone className="shrink-0 text-saffron-ink" /> {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-forest">
                  <Mail className="shrink-0 text-saffron-ink" /> {site.email}
                </a>
              </li>
            </ul>
          </FadeUp>

          <div className="rounded-[28px] border border-forest/10 bg-cream p-6 shadow-[0_40px_80px_-50px_rgba(14,59,44,.5)] md:p-10">
            <p className="eyebrow text-saffron-ink">Get in touch</p>
            <RevealText className="font-display mt-3 text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none text-forest">
              Send us a <span className="font-italic-display text-saffron-ink">message</span>
            </RevealText>
            <p className="mt-3 text-muted">Fill in the form and your message goes straight to our inbox. We&apos;ll get back to you as soon as possible.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. Hours + exterior */}
      <section className="jaali py-24 md:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="rounded-[28px] bg-cream p-6 md:p-10">
            <p className="eyebrow text-saffron-ink">Opening hours</p>
            <RevealText className="font-display mt-3 text-[clamp(2.2rem,4.4vw,3.8rem)] font-medium leading-none text-forest">
              Come <span className="font-italic-display text-saffron-ink">hungry.</span>
            </RevealText>
            <p className="mt-4 text-muted">Lunch, dinner or a quick bite in between, the kitchen is open six days a week.</p>
            <HoursList />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.mapsUrl} external variant="forest">
                Get Directions
              </Button>
              <Button href={site.orderUrl} variant="ghost-dark">
                Order Online
              </Button>
            </div>
          </div>
          <FadeUp y={60}>
            <div className="group relative aspect-[16/11] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)]">
              <Image
                src="/images/contact-exterior.jpg"
                alt="Chapati Halal restaurant exterior at dusk with its green sign and terrace seating"
                fill
                sizes="(min-width:1024px) 52vw, 92vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
