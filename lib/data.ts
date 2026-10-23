// Central content for the site. Swap copy, prices, images and locations here.

export const site = {
  name: "Chapati Halal",
  tagline: "Cocina India Pakistan",
  motto: "Authentic food. Good company.",
  description:
    "Chapati Halal brings together the rich culinary traditions of India and Pakistan — 100% halal biryani, curries, karahi and fresh-baked chapati, made with love.",
  url: "https://www.chapatihalal.com",
  phone: "+57 300 2270959",
  phoneHref: "tel:+573002270959",
  email: "chapatihalal273@gmail.com",
  address: "Centro Comercial Vega10, Cra. 48 #7-298, Local 103, El Poblado, Medellín, Antioquia, Colombia",
  mapsUrl: "https://maps.app.goo.gl/5N4bgVQwH7VuVHYz6",
  orderUrl: "/menu",
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export type Dish = {
  name: string;
  desc: string;
  price: string;
  img: string;
  tag?: string;
};

export const signatureDishes: Dish[] = [
  { name: "Beef Biryani", desc: "Beef, basmati rice and a slow-built masala of whole spices.", price: "$48.000", img: "/images/pd-beef-biryani.jpg", tag: "House favourite" },
  { name: "Chicken Tikka Boti", desc: "Charcoal-grilled chicken, yoghurt and Kashmiri chilli.", price: "$30.000", img: "/images/pd-tikka-boti.jpg", tag: "From the grill" },
  { name: "Beef Kofta", desc: "Hand-rolled beef meatballs in an onion–tomato gravy.", price: "$48.000", img: "/images/pd-beef-kofta.jpg" },
  { name: "Paneer Karahi", desc: "Fresh paneer and peppers tossed in a wok with onion, ginger, garlic and tomato.", price: "$35.000", img: "/images/pd-paneer-karahi.jpg", tag: "Vegetarian" },
  { name: "Chicken Karahi", desc: "Chicken cooked in the karahi with tomato, green chilli, ginger and fresh coriander.", price: "$30.000", img: "/images/pd-chicken-karahi.jpg" },
  { name: "Gulab Jamun", desc: "Warm milk dumplings soaked in cardamom-rose syrup.", price: "$9.000", img: "/images/pd-gulab-jamun.jpg", tag: "Sweet finish" },
];

export const categories = [
  { slug: "biryani", name: "Biryani & Rice", note: "Dum-cooked basmati, layered and fragrant", img: "/images/menu/beef-biryani.jpg" },
  { slug: "curries", name: "Karahi & Curry", note: "Karahis, kormas and slow-cooked curries", img: "/images/menu/chicken-karahi.jpg" },
  { slug: "vegetables", name: "Vegetarian", note: "Paneer, dal and seasonal sabzi", img: "/images/menu/paneer-karahi.jpg" },
  { slug: "bbq", name: "BBQ & Grill", note: "Tikka and chapli kebab off the coals", img: "/images/menu/chicken-tikka-boti.jpg" },
  { slug: "shawarma", name: "Shawarma & Rolls", note: "Chicken, beef and mutton wraps", img: "/images/menu/chicken-shawarma-wrap.jpg" },
  { slug: "breads", name: "Breads & Paratha", note: "Chapati and paratha hot from the tawa", img: "/images/menu/chapati.jpg" },
  { slug: "snacks", name: "Samosa & Snacks", note: "Samosas, pakoras and chutneys", img: "/images/menu/alu-samosas.jpg" },
  { slug: "desserts", name: "Sweets", note: "Gulab jamun, firni and gajar halwa", img: "/images/menu/gulab-jamun.jpg" },
  { slug: "beverages", name: "Beverages", note: "Lassi, chai, juices and shakes", img: "/images/menu/mango-lassi.jpg" },
];

// price is optional: dishes without one show no price badge until it is added.
export type MenuItem = { name: string; desc: string; price?: string; img: string; veg?: boolean; spicy?: boolean };
export type MenuSection = { slug: string; title: string; intro: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    slug: "biryani",
    title: "Biryani & Rice",
    intro: "Aromatic basmati rice cooked with traditional spices, served with salad and raita.",
    items: [
      { name: "Beef Biryani", desc: "Tender beef layered with basmati rice, fried onions and a slow-built masala of whole spices.", price: "$48.000", img: "/images/menu/beef-biryani.jpg", spicy: true },
      { name: "Chicken Biryani", desc: "Bone-in chicken layered with saffron rice, fried onions and fresh mint.", img: "/images/menu/chicken-biryani.jpg", spicy: true },
      { name: "Mutton Biryani", desc: "Slow-cooked mutton dum-layered with fragrant basmati rice.", img: "/images/menu/mutton-biryani.jpg", spicy: true },
      { name: "Basmati Rice", desc: "Long-grain basmati rice, steamed and finished with a little spice.", price: "$12.000", img: "/images/menu/basmati-rice.jpg", veg: true },
      { name: "Plain Rice", desc: "Fluffy steamed white rice, perfect with any curry.", img: "/images/menu/plain-rice.jpg", veg: true },
    ],
  },
  {
    slug: "curries",
    title: "Karahi & Curry",
    intro: "Rich karahis and slow-cooked curries, served with two chapati or basmati rice.",
    items: [
      { name: "Chicken Karahi", desc: "Chicken cooked in the karahi with tomato, green chilli, ginger and coriander.", price: "$30.000", img: "/images/menu/chicken-karahi.jpg", spicy: true },
      { name: "Beef Karahi", desc: "Tender beef tossed in a wok with tomato, ginger, garlic and green chilli.", img: "/images/menu/beef-karahi.jpg", spicy: true },
      { name: "Mutton Karahi", desc: "Mutton cooked the traditional way in a karahi with fresh tomato and spices.", img: "/images/menu/mutton-karahi.jpg", spicy: true },
      { name: "Chicken Korma", desc: "Chicken in a mild, creamy gravy of yoghurt, onion and aromatic spices.", img: "/images/menu/chicken-korma.jpg" },
      { name: "Beef Korma", desc: "Beef slow-cooked in a rich, creamy onion and yoghurt korma.", img: "/images/menu/beef-korma.jpg" },
      { name: "Mutton Korma", desc: "Mutton simmered in a fragrant, velvety korma sauce.", img: "/images/menu/mutton-korma.jpg" },
      { name: "Chicken Makhni", desc: "Butter chicken in a smooth tomato, butter and cream sauce.", img: "/images/menu/chicken-makhin.jpg" },
      { name: "Mutton Makhni", desc: "Mutton in a buttery, mildly spiced tomato and cream gravy.", img: "/images/menu/mutton-makhni.jpg" },
      { name: "Beef Kofta Curry", desc: "Hand-rolled beef meatballs in an onion and tomato gravy.", price: "$48.000", img: "/images/menu/beef-kofta-curry.jpg" },
      { name: "Fish Curry", desc: "Fish simmered with onion, ginger, garlic and tomato.", price: "$45.000", img: "/images/menu/fish-curry.jpg", spicy: true },
      { name: "Fish Fillet", desc: "Spiced fish fillet with basmati rice, salad and garlic sauce.", price: "$40.000", img: "/images/menu/fish-fillet.jpg" },
    ],
  },
  {
    slug: "vegetables",
    title: "Vegetarian",
    intro: "Traditional vegetarian dishes, rich in flavour and made with fresh ingredients.",
    items: [
      { name: "Paneer Karahi", desc: "Paneer and peppers tossed in a wok with onion, ginger, garlic and tomato.", price: "$35.000", img: "/images/menu/paneer-karahi.jpg", veg: true, spicy: true },
      { name: "Matar Paneer", desc: "Green peas and fresh paneer in a spiced tomato gravy.", price: "$35.000", img: "/images/menu/matar-paneer.jpg", veg: true },
      { name: "Aloo Palak", desc: "Spinach and potato cooked with onion, garlic, ginger and tomato.", price: "$35.000", img: "/images/menu/aloo-palak.jpg", veg: true },
      { name: "Dal Tadka", desc: "Yellow lentils tempered with cumin, garlic and dried chilli.", price: "$30.000", img: "/images/menu/dal-tadka.jpg", veg: true },
      { name: "Dal Fry", desc: "Comforting lentils cooked with onion, tomato and spices.", img: "/images/menu/dal-fry.jpg", veg: true },
      { name: "Channa Curry", desc: "Chickpeas in a hearty, spiced onion and tomato curry.", price: "$30.000", img: "/images/menu/channa-curry.jpg", veg: true },
      { name: "Vegetable Curry", desc: "Seasonal vegetables in a fragrant masala.", price: "$30.000", img: "/images/menu/vegetable-curry.jpg", veg: true },
      { name: "Vegetable Biryani", desc: "Basmati rice layered with seasonal vegetables and whole spices.", img: "/images/menu/vegetable-biryani.jpg", veg: true },
    ],
  },
  {
    slug: "bbq",
    title: "BBQ & Grill",
    intro: "Marinated overnight, finished over open flame.",
    items: [
      { name: "Chicken Tikka Boti", desc: "Charcoal-grilled chicken pieces with mint chutney.", price: "$30.000", img: "/images/menu/chicken-tikka-boti.jpg", spicy: true },
      { name: "Chapli Kebab Platter", desc: "Peshawari-style minced kebabs with onion, lemon and chutney.", img: "/images/menu/chapli-kebab-platter.jpg", spicy: true },
    ],
  },
  {
    slug: "shawarma",
    title: "Shawarma & Rolls",
    intro: "Freshly grilled meat wrapped in warm bread, served with fries and sauces.",
    items: [
      { name: "Chicken Shawarma Wrap", desc: "Grilled chicken, salad and garlic sauce in warm flatbread.", img: "/images/menu/chicken-shawarma-wrap.jpg" },
      { name: "Beef Shawarma Wrap", desc: "Spiced beef, fresh salad and sauces, rolled to order.", img: "/images/menu/beef-shawarma-wraps.jpg" },
      { name: "Mutton Shawarma Wrap", desc: "Tender mutton with salad and garlic sauce in flatbread.", img: "/images/menu/mutton-shawarma-wrap.jpg" },
      { name: "Mixed Shawarma (Beef)", desc: "Chicken and beef together in one generous wrap.", img: "/images/menu/mixed-shawarma-beef.jpg" },
      { name: "Mixed Shawarma (Mutton)", desc: "Chicken and mutton together in one generous wrap.", img: "/images/menu/mixed-shawarma-mutton-lamb.jpg" },
      { name: "Kebab Roll Paratha", desc: "Seekh kebab, onion and chutney rolled in a flaky paratha.", img: "/images/menu/kebab-rolls-pratha.jpg", spicy: true },
    ],
  },
  {
    slug: "breads",
    title: "Breads & Paratha",
    intro: "Hand-stretched and cooked to order on the tawa.",
    items: [
      { name: "Chapati", desc: "Whole-wheat flatbread, blistered on the tawa.", price: "$3.000", img: "/images/menu/chapati.jpg", veg: true },
      { name: "Makhni Paratha", desc: "Flaky layered flatbread finished with butter.", price: "$10.000", img: "/images/menu/makhni-pratha.jpg", veg: true },
      { name: "Aloo Paratha", desc: "Paratha stuffed with spiced potato.", img: "/images/menu/aloo-paratha.jpg", veg: true },
      { name: "Paneer Paratha", desc: "Paratha stuffed with spiced paneer.", img: "/images/menu/paneer-paratha.jpg", veg: true },
      { name: "Chicken Paratha", desc: "Paratha stuffed with spiced minced chicken.", img: "/images/menu/chicken-pratha.jpg" },
    ],
  },
  {
    slug: "snacks",
    title: "Samosa & Snacks",
    intro: "Crispy street-food favourites, served with chutneys.",
    items: [
      { name: "Aloo Samosa", desc: "Crisp pastry filled with spiced potato and peas.", price: "$8.000", img: "/images/menu/alu-samosas.jpg", veg: true },
      { name: "Chicken Samosa", desc: "Crisp pastry filled with spiced minced chicken.", img: "/images/menu/chicken-samosas.jpg" },
      { name: "Beef Samosa", desc: "Crisp pastry filled with spiced minced beef.", img: "/images/menu/beef-samosas.jpg" },
      { name: "Mutton Samosa", desc: "Crisp pastry filled with spiced minced mutton.", img: "/images/menu/mutton-samosa.jpg" },
      { name: "Chicken Pakoras", desc: "Chicken pieces fried in a spiced gram-flour batter.", img: "/images/menu/chicken-pakoras.jpg", spicy: true },
      { name: "Vegetable Pakoras", desc: "Mixed vegetable fritters in a crisp gram-flour batter.", img: "/images/menu/vegetable-pakoras.jpg", veg: true },
    ],
  },
  {
    slug: "desserts",
    title: "Sweets",
    intro: "Something sweet to close the meal, also available to take away.",
    items: [
      { name: "Gulab Jamun", desc: "Warm milk dumplings in cardamom and rose syrup.", price: "$9.000", img: "/images/menu/gulab-jamun.jpg", veg: true },
      { name: "Gulab Jamun (Takeaway Box)", desc: "A box of gulab jamun to enjoy at home.", img: "/images/menu/gulab-jamun-in-clear-takeaway-box.jpg", veg: true },
      { name: "Firni", desc: "Chilled ground-rice pudding with cardamom, pistachio and rose.", img: "/images/menu/firni.jpg", veg: true },
      { name: "Firni (Takeaway)", desc: "Our firni, packed to take home.", img: "/images/menu/firni-takeout-container.jpg", veg: true },
      { name: "Gajar Ka Halwa", desc: "Slow-cooked carrot pudding with ghee, milk and nuts.", img: "/images/menu/gajar-ka-halwa.jpg", veg: true },
      { name: "Gajar Halwa (Takeaway)", desc: "Gajar ka halwa, packed to take home.", img: "/images/menu/gajar-halwa-takeout-container.jpg", veg: true },
    ],
  },
  {
    slug: "beverages",
    title: "Beverages",
    intro: "Cooling, sweet and spiced.",
    items: [
      { name: "Mango Lassi", desc: "Thick yoghurt blended with sweet mango.", price: "$7.000", img: "/images/menu/mango-lassi.jpg", veg: true },
      { name: "Fresh Juice", desc: "Mango, orange, pineapple, guava or lemonade, squeezed fresh.", img: "/images/menu/fresh-juice.jpg", veg: true },
      { name: "Milkshake", desc: "Creamy shakes in strawberry, chocolate, vanilla and more.", img: "/images/menu/milkshake.jpg", veg: true },
      { name: "Masala Chai", desc: "Spiced milk tea brewed with cardamom, ginger and cinnamon.", img: "/images/menu/steaming-ornate-chai-with-spices.jpg", veg: true },
      { name: "Tea", desc: "A pot of black tea, served hot.", img: "/images/menu/tea-still.jpg", veg: true },
      { name: "Soft Drinks", desc: "Assorted chilled sodas.", img: "/images/menu/soda.jpg", veg: true },
      { name: "Mineral Water", desc: "Still bottled water.", img: "/images/menu/refreshing-mineral-water-still-life.jpg", veg: true },
      { name: "Yoghurt (Portion)", desc: "A side of fresh, cooling plain yoghurt.", img: "/images/menu/yogurt-portion.jpg", veg: true },
    ],
  },
];

export const testimonials = [
  { quote: "Amazing food! The biryani is full of flavour and the portion sizes are great. Highly recommend!", name: "Ayesha K.", meta: "Dined in" },
  { quote: "Authentic taste and excellent service. The best Indian & Pakistani food in the area.", name: "Bilal S.", meta: "Regular guest" },
  { quote: "Fresh, halal food with a warm and welcoming atmosphere. Will definitely come again!", name: "Sana R.", meta: "Family dinner" },
  { quote: "The chapati comes to the table still puffing. That alone is worth the trip.", name: "Daniel M.", meta: "Takeout" },
];

export type Location = {
  slug: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  mapsUrl: string;
  img: string;
  hours: { days: string; time: string }[];
};

// Opening hours. Sunday wasn't specified, so it is shown as closed.
export const weeklyHours = [
  { day: "Monday", time: "12:00 PM – 8:30 PM" },
  { day: "Tuesday", time: "12:00 PM – 8:30 PM" },
  { day: "Wednesday", time: "12:00 PM – 8:30 PM" },
  { day: "Thursday", time: "12:00 PM – 8:30 PM" },
  { day: "Friday", time: "12:00 PM – 8:30 PM" },
  { day: "Saturday", time: "12:00 PM – 8:30 PM" },
  { day: "Sunday", time: "Closed" },
];

export const locations: Location[] = [
  {
    slug: "medellin",
    city: "El Poblado, Medellín",
    name: "Chapati Halal Medellín",
    address: "Centro Comercial Vega10, Cra. 48 #7-298, Local 103, El Poblado, Medellín, Antioquia, Colombia",
    phone: "+57 300 2270959",
    mapsUrl: "https://maps.app.goo.gl/5N4bgVQwH7VuVHYz6",
    img: "/images/storefront-night.jpg",
    hours: [
      { days: "Mon – Sat", time: "12:00 PM – 8:30 PM" },
      { days: "Sunday", time: "Closed" },
    ],
  },
];

export type GalleryItem = { src: string; alt: string; cat: "food" | "interior" | "exterior" | "dining"; tall?: boolean; wide?: boolean };

export const gallery: GalleryItem[] = [
  { src: "/images/g-biryani.jpg", alt: "Beef biryani with fried onions and coriander", cat: "food", wide: true },
  { src: "/images/g-curry.jpg", alt: "Chicken curry in a steel karahi", cat: "food" },
  { src: "/images/storefront-day.jpg", alt: "Chapati Halal storefront in daylight", cat: "exterior", wide: true },
  { src: "/images/g-naan.jpg", alt: "Blistered naan in a basket", cat: "food" },
  { src: "/images/g-interior-1.jpg", alt: "Dining room with orange and green walls", cat: "interior" },
  { src: "/images/g-mango-lassi.jpg", alt: "Glass of mango lassi", cat: "food", tall: true },
  { src: "/images/g-platter.jpg", alt: "Curry, rice, salad and chapati platter", cat: "food" },
  { src: "/images/interior-warm.jpg", alt: "Warm-lit dining room with lanterns", cat: "dining", wide: true },
  { src: "/images/g-samosa.jpg", alt: "Two samosas with green and tamarind chutney", cat: "food" },
  { src: "/images/g-buffet.jpg", alt: "Hot food counter with trays of curries", cat: "interior", wide: true },
  { src: "/images/chef.jpg", alt: "Chef finishing a dish with spices", cat: "dining" },
  { src: "/images/spices.jpg", alt: "Whole and ground spices in bowls", cat: "food" },
  { src: "/images/g-kebab.jpg", alt: "Seekh kebab platter with salad and rice", cat: "food", wide: true },
  { src: "/images/g-gulab.jpg", alt: "Gulab jamun in syrup", cat: "food" },
  { src: "/images/storefront-night.jpg", alt: "Chapati Halal terrace at night", cat: "exterior" },
  { src: "/images/g-aloo.jpg", alt: "Aloo curry with coriander", cat: "food", tall: true },
  { src: "/images/g-interior-3.jpg", alt: "Long dining room with tables set", cat: "dining" },
  { src: "/images/g-chapati.jpg", alt: "Fresh chapati on paper", cat: "food" },
  { src: "/images/interior-dine.jpg", alt: "Evening dining room with pendant lamps", cat: "dining", wide: true },
  { src: "/images/g-breads.jpg", alt: "Breads, curry and rice on the table", cat: "food" },
];

export const values = [
  { title: "Authentic Flavours", text: "Recipes from Lahore, Karachi and Delhi kitchens — no shortcuts.", icon: "chef" },
  { title: "100% Halal", text: "Every cut, every stock, every sauce — certified and prepared with care.", icon: "halal" },
  { title: "Vegetarian Choices", text: "From comforting dal tadka to flavourful paneer dishes and fresh vegetable curries, there’s something delicious for every vegetarian.", icon: "leaf" },
  { title: "Quality Ingredients", text: "Whole spices toasted in-house; produce bought fresh every morning.", icon: "hand" },
] as const;

/* ------------------------------ Catering ------------------------------ */

export const cateringOccasions = [
  { title: "Family Gatherings", text: "Share a delicious meal with family and friends.", img: "/images/cat-family.jpg", icon: "people" },
  { title: "Corporate Events", text: "Catering for office lunches, meetings and team events.", img: "/images/cat-corporate.jpg", icon: "briefcase" },
  { title: "Parties & Celebrations", text: "Birthdays, anniversaries and special occasions.", img: "/images/cat-party.jpg", icon: "confetti" },
  { title: "Private Events", text: "Group meals and celebrations tailored to your needs.", img: "/images/cat-private.jpg", icon: "gift" },
] as const;

export type CateringItem = { name: string; desc: string; img: string };
export const cateringMenu: { slug: string; label: string; items: CateringItem[] }[] = [
  {
    slug: "biryani",
    label: "Biryani & Rice",
    items: [
      { name: "Chicken Biryani", desc: "Aromatic basmati rice with tender chicken, traditional spices and fresh herbs.", img: "/images/cat-chicken-biryani.jpg" },
      { name: "Beef Biryani", desc: "Fragrant rice cooked with succulent beef and authentic spices.", img: "/images/g-biryani.jpg" },
      { name: "Vegetable Biryani", desc: "Flavourful basmati rice with seasonal vegetables and traditional spices.", img: "/images/cat-veg-biryani.jpg" },
      { name: "Plain Basmati Rice", desc: "Steamed basmati rice, perfect to pair with our curries.", img: "/images/m-rice.jpg" },
    ],
  },
  {
    slug: "curries",
    label: "Curries",
    items: [
      { name: "Chicken Curry", desc: "Juicy chicken slow-cooked in a rich, spiced gravy.", img: "/images/d-chicken-curry.jpg" },
      { name: "Beef Kofta", desc: "Hand-rolled beef meatballs in an onion–tomato gravy.", img: "/images/d-beef-kofta.jpg" },
      { name: "Aloo Gosht", desc: "Tender meat and potato in a home-style curry.", img: "/images/g-aloo.jpg" },
      { name: "Fish Curry", desc: "Fish simmered with onion, ginger and garlic.", img: "/images/m-fish-curry.jpg" },
    ],
  },
  {
    slug: "breads",
    label: "Breads & Sides",
    items: [
      { name: "Chapati", desc: "Whole-wheat flatbread, baked fresh for your event.", img: "/images/g-chapati.jpg" },
      { name: "Paratha", desc: "Flaky, buttery layered flatbread.", img: "/images/g-naan.jpg" },
      { name: "Bread Basket", desc: "A mix of chapati, naan and paratha for the table.", img: "/images/g-breads.jpg" },
      { name: "Salad & Raita", desc: "Fresh salad with cooling yoghurt raita.", img: "/images/g-platter.jpg" },
    ],
  },
  {
    slug: "appetizers",
    label: "Appetizers",
    items: [
      { name: "Samosa", desc: "Crisp pastry with spiced potato and peas, served with chutneys.", img: "/images/g-samosa.jpg" },
      { name: "Chicken Tikka Boti", desc: "Charcoal-grilled chicken bites with mint chutney.", img: "/images/d-tikka.jpg" },
      { name: "Seekh Kebab", desc: "Minced, spiced skewers straight off the grill.", img: "/images/g-kebab.jpg" },
    ],
  },
  {
    slug: "vegetarian",
    label: "Vegetarian",
    items: [
      { name: "Dal Tadka", desc: "Yellow lentils tempered with cumin and garlic.", img: "/images/m-dal.jpg" },
      { name: "Paneer Karahi", desc: "Paneer tossed with onion, ginger, garlic and tomato.", img: "/images/m-karahi.jpg" },
      { name: "Aloo Palak", desc: "Spinach and potato, home-style.", img: "/images/m-palak.jpg" },
      { name: "Mix Vegetable", desc: "Seasonal vegetables in a fragrant masala.", img: "/images/d-mix-veg.jpg" },
    ],
  },
  {
    slug: "desserts",
    label: "Desserts & Drinks",
    items: [
      { name: "Gulab Jamun", desc: "Milk dumplings in cardamom–rose syrup.", img: "/images/g-gulab.jpg" },
      { name: "Mango Lassi", desc: "Thick yoghurt blended with sweet mango.", img: "/images/g-mango-lassi.jpg" },
    ],
  },
];

export const cateringPackages = [
  { name: "Small Gathering", guests: "Serves 10–20 people", text: "Perfect for family meals and small celebrations. A selection of popular dishes, sides and breads.", img: "/images/cat-pkg-small.jpg", cta: "View Menu Options", href: "#catering-menu" },
  { name: "Party Package", guests: "Serves 25–50 people", text: "Great for birthdays, social events and larger gatherings. A variety of dishes for a complete meal experience.", img: "/images/cat-pkg-party.jpg", cta: "View Menu Options", href: "#catering-menu", popular: true },
  { name: "Corporate & Large Events", guests: "Serves 50+ people", text: "Ideal for offices, corporate lunches and large celebrations. Custom menu options and quantities available.", img: "/images/cat-pkg-large.jpg", cta: "Request a Custom Quote", href: "#quote" },
];
