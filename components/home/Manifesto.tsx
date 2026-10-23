import Image from "next/image";
import { ScrubWords, FadeUp } from "../motion";

export default function Manifesto() {
  return (
    <section className="relative py-24 md:py-40">
      <div className="container-x grid gap-12 md:grid-cols-[180px_1fr] lg:grid-cols-[260px_1fr]">
        <FadeUp>
          <p className="eyebrow text-saffron-ink">Our promise</p>
          <div className="relative mt-6 aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[999px_999px_20px_20px] md:max-w-none">
            <Image src="/images/promise-chef.jpg" alt="Chef sprinkling spices over a plate of chicken tikka with naan and salad" fill sizes="(min-width:1024px) 260px, (min-width:768px) 180px, 280px" className="object-cover" />
          </div>
        </FadeUp>
        <div>
          <ScrubWords
            className="font-display text-[clamp(1.8rem,4.2vw,4rem)] leading-[1.12] text-forest"
            text="We cook the way our mothers did — whole spices toasted by hand, dough rolled to order, and every pot finished with patience. No shortcuts. Just honest, halal food that tastes like home."
          />
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex -space-x-4">
              {["/images/g-curry.jpg", "/images/g-chapati.jpg", "/images/g-samosa.jpg"].map((s) => (
                <span key={s} className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-cream">
                  <Image src={s} alt="" fill sizes="64px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="max-w-xs text-sm text-muted">Over 40 dishes from the kitchens of Lahore, Karachi and Delhi — cooked fresh every day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
