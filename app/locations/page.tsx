import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";
import { FadeUp, RevealText } from "@/components/motion";
import { Clock, Phone, Pin } from "@/components/Icons";
import { locations, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find your nearest Chapati Halal — addresses, opening hours, phone numbers and directions.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our locations"
        line1="Three kitchens,"
        line2="one family."
        text="Every Chapati Halal cooks from the same recipes, with the same spices, the same halal standards and the same warm welcome. Find the one nearest you."
        img="/images/interior-warm.jpg"
        alt="Lantern-lit Chapati Halal dining room"
      >
        <Button href="#list" variant="forest">
          See All Locations
        </Button>
      </PageHero>

      <section id="list" className="pb-24 md:pb-32">
        <div className="container-x space-y-20 md:space-y-28">
          {locations.map((l, i) => (
            <article id={l.slug} key={l.slug} className={`scroll-mt-28 grid items-center gap-10 md:grid-cols-2 lg:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <FadeUp className="relative">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] grain">
                  <Image src={l.img} alt={`${l.name} restaurant`} fill sizes="(min-width:768px) 48vw, 92vw" className="object-cover" />
                </div>
                <span className="font-display absolute -top-6 left-6 text-[clamp(4rem,9vw,8rem)] leading-none text-saffron" aria-hidden>
                  0{i + 1}
                </span>
              </FadeUp>
              <div>
                {l.flagship && <p className="eyebrow text-saffron-ink">Flagship</p>}
                <RevealText className="font-display mt-3 text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-none text-forest">{l.city}</RevealText>
                <FadeUp>
                  <ul className="mt-8 space-y-4 text-lg text-muted">
                    <li className="flex gap-3">
                      <Pin className="mt-1 shrink-0 text-saffron-ink" /> {l.address}
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-1 shrink-0 text-saffron-ink" />
                      <a href={`tel:${l.phone.replace(/[^+\d]/g, "")}`} className="hover:text-forest">
                        {l.phone}
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
                    <Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.mapsQuery)}`} external variant="forest">
                      Get Directions
                    </Button>
                    <Button href={site.orderUrl} variant="ghost-dark">
                      Order from here
                    </Button>
                  </div>
                </FadeUp>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
