import Image from "next/image";
import Button from "./Button";
import { RevealText, FadeUp } from "./motion";
import { site } from "@/lib/data";

type Props = { title?: string; accent?: string; text?: string; secondary?: { href: string; label: string } };

const plates = [
  { src: "/images/hero-curry.jpg", alt: "Karahi with rice and bread", cls: "left-[4%] top-[10%] w-[58%] -rotate-6 z-10", d: 0 },
  { src: "/images/g-chapati.jpg", alt: "Fresh chapati", cls: "right-[2%] top-[0%] w-[42%] rotate-6", d: 0.12 },
  { src: "/images/g-gulab.jpg", alt: "Gulab jamun", cls: "right-[10%] bottom-[2%] w-[44%] rotate-3 z-20", d: 0.24 },
];

export default function CTABand({
  title = "Craving authentic",
  accent = "Indian & Pakistani food?",
  text = "Order online, visit us, or call for takeout and delivery. The tandoor is already hot.",
  secondary = { href: "/locations", label: "Find Our Location" },
}: Props) {
  return (
    <section className="jaali relative overflow-hidden text-cream">
      <div className="container-x grid items-center gap-14 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div>
          <RevealText as="h2" className="font-display text-[clamp(2.3rem,5vw,4.6rem)] font-medium leading-[1.02]">
            {title} <span className="font-italic-display text-saffron">{accent}</span>
          </RevealText>
          <p className="mt-6 max-w-md text-lg text-mint">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={site.orderUrl}>Order Online</Button>
            <Button href={secondary.href} variant="ghost-light">
              {secondary.label}
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-[1/0.85] w-full max-w-[520px]" aria-hidden>
          {plates.map((p) => (
            <FadeUp key={p.src} delay={p.d} y={80} className={`absolute ${p.cls}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border-[6px] border-cream/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] grain">
                <Image src={p.src} alt="" fill sizes="(min-width: 768px) 300px, 60vw" className="object-cover" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
