import Link from "next/link";
import { nav, site, locations } from "@/lib/data";
import Logo from "./Logo";
import { Mail, Phone, Pin, Social } from "./Icons";
import FooterWordmark from "./FooterWordmark";

export default function Footer() {
  return (
    <footer className="jaali relative overflow-hidden text-cream">
      <div className="container-x grid gap-12 pb-12 pt-20 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr]">
        <div className="max-w-xs">
          <Link href="/" className="block w-36">
            <span className="sr-only">Chapati Halal home</span>
            <Logo tone="light" withTagline />
          </Link>
          <p className="mt-6 font-display text-2xl leading-snug">{site.motto}</p>
        </div>

        <div>
          <h2 className="eyebrow text-saffron">Explore</h2>
          <ul className="mt-5 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-mint transition-colors hover:text-saffron">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-saffron">Contact</h2>
          <ul className="mt-5 space-y-4 text-mint">
            <li className="flex gap-3">
              <Pin size={20} className="mt-0.5 shrink-0 text-saffron" />
              <span>
                {locations.length} locations — flagship at
                <br />
                {locations[0].address}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="shrink-0 text-saffron" />
              <a href={site.phoneHref} className="hover:text-saffron">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="shrink-0 text-saffron" />
              <a href={`mailto:${site.email}`} className="hover:text-saffron">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-saffron">Follow</h2>
          <ul className="mt-5 flex gap-2">
            {site.social.map((s) => {
              const Icon = Social[s.label as keyof typeof Social];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition-colors hover:border-saffron hover:bg-saffron hover:text-ink"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <FooterWordmark />

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-mint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Chapati Halal. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/contact" className="hover:text-saffron">
              Privacy Policy
            </Link>
            <span aria-hidden>|</span>
            <Link href="/contact" className="hover:text-saffron">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
