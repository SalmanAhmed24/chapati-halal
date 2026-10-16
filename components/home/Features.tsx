import { FadeUp } from "../motion";
import { Leaf, Chef, Halal, People, Bag } from "../Icons";

const items = [
  { icon: Leaf, title: "Fresh Ingredients", text: "Quality produce in every dish" },
  { icon: Chef, title: "Authentic Recipes", text: "Traditional Indian & Pakistani flavours" },
  { icon: Halal, title: "100% Halal Food", text: "Prepared with care, always" },
  { icon: People, title: "Friendly Service", text: "Always a warm welcome" },
  { icon: Bag, title: "Dine-in, Takeout & Delivery", text: "Your favourites, anywhere" },
];

export default function Features() {
  return (
    <section aria-labelledby="features-h" className="border-y border-forest/10 bg-cream-2/60">
      <h2 id="features-h" className="sr-only">Why guests choose us</h2>
      <ul className="container-x grid grid-cols-2 gap-y-10 [&>li:last-child]:col-span-2 sm:[&>li:last-child]:col-span-1 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-forest/10">
        {items.map(({ icon: Icon, title, text }, i) => (
          <FadeUp as="li" key={title} delay={i * 0.07} className="flex flex-col items-center px-4 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-forest/20 text-forest transition-colors duration-500 hover:bg-forest hover:text-saffron">
              <Icon size={28} />
            </span>
            <h3 className="mt-4 font-bold text-forest">{title}</h3>
            <p className="mt-1 text-sm text-muted">{text}</p>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
