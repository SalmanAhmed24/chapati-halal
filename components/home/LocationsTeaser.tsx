import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/data";
import { FadeUp, RevealText } from "../motion";
import { ArrowUpRight, Pin } from "../Icons";

export default function LocationsTeaser() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x">
        <p className="eyebrow text-saffron-ink">Find us</p>
        <RevealText as="h2" className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-none text-forest">
          Three kitchens, <span className="font-italic-display text-saffron-ink">one family.</span>
        </RevealText>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {locations.map((l, i) => (
            <FadeUp as="li" key={l.slug} delay={i * 0.1}>
              <Link href={`/locations#${l.slug}`} data-cursor="Visit" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] grain">
                  <Image src={l.img} alt={`${l.name} location`} fill sizes="(min-width: 768px) 31vw, 92vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" />
                  {l.flagship && <span className="absolute left-4 top-4 rounded-full bg-saffron px-3 py-1 text-xs font-extrabold text-ink">Flagship</span>}
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-forest">{l.city}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                      <Pin size={16} /> {l.address}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-forest/20 text-forest transition-all duration-500 group-hover:rotate-45 group-hover:bg-forest group-hover:text-cream">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
