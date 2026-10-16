// Central content for the site. Swap copy, prices, images and locations here.

export const site = {
  name: "Chapati Halal",
  tagline: "Cocina India Pakistan",
  motto: "Authentic food. Good company.",
  description:
    "Chapati Halal brings together the rich culinary traditions of India and Pakistan — 100% halal biryani, curries, karahi and fresh-baked chapati, made with love.",
  url: "https://www.chapatihalal.com",
  phone: "+1 (271) 555-0123",
  phoneHref: "tel:+12715550123",
  email: "info@chapatihalal.com",
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
  { name: "Beef Biryani", desc: "Beef, basmati rice and a slow-built masala of whole spices.", price: "$48.000", img: "/images/g-biryani.jpg", tag: "House favourite" },
  { name: "Chicken Tikka Boti", desc: "Charcoal-grilled chicken, yoghurt and Kashmiri chilli.", price: "$30.000", img: "/images/d-tikka.jpg", tag: "From the grill" },
  { name: "Beef Kofta", desc: "Hand-rolled beef meatballs in an onion–tomato gravy.", price: "$48.000", img: "/images/d-beef-kofta.jpg" },
  { name: "Seekh Kebab Platter", desc: "Minced lamb skewers, salad, raita and fresh chapati.", price: "$42.000", img: "/images/g-kebab.jpg", tag: "To share" },
  { name: "Chicken Curry", desc: "Juicy chicken cooked low and slow with rich spices.", price: "$30.000", img: "/images/d-chicken-curry.jpg" },
  { name: "Gulab Jamun", desc: "Warm milk dumplings soaked in cardamom-rose syrup.", price: "$9.000", img: "/images/g-gulab.jpg", tag: "Sweet finish" },
];

export const categories = [
  { slug: "biryani", name: "Biryani & Rice", note: "Dum-cooked basmati, layered and fragrant", img: "/images/g-biryani-2.jpg" },
  { slug: "curries", name: "Curries", note: "Slow gravies, deep spice, built from scratch", img: "/images/g-curry.jpg" },
  { slug: "vegetables", name: "Vegetarian", note: "Paneer, dal and seasonal sabzi", img: "/images/m-palak.jpg" },
  { slug: "bbq", name: "BBQ & Grill", note: "Tikka, seekh and boti off the coals", img: "/images/g-kebab.jpg" },
  { slug: "breads", name: "Breads & Paratha", note: "Chapati and naan slapped hot from the tawa", img: "/images/g-chapati.jpg" },
  { slug: "snacks", name: "Snacks", note: "Samosa, pakora and chutneys", img: "/images/g-samosa.jpg" },
  { slug: "desserts", name: "Desserts", note: "Gulab jamun, kheer and more", img: "/images/g-gulab.jpg" },
  { slug: "beverages", name: "Beverages", note: "Mango lassi, chai and cold drinks", img: "/images/g-mango-lassi.jpg" },
];

export type MenuItem = { name: string; desc: string; price: string; img: string; veg?: boolean; spicy?: boolean };
export type MenuSection = { slug: string; title: string; intro: string; items: MenuItem[] };

export const menu: MenuSection[] = [
  {
    slug: "biryani",
    title: "Biryani & Rice",
    intro: "Aromatic basmati rice cooked with traditional spices, served with salad and sauces.",
    items: [
      { name: "Beef Biryani", desc: "Beef, basmati rice, salad and raita, cooked with onion, ginger, garlic and a blend of oriental spices.", price: "$48.000", img: "/images/d-biryani.jpg", spicy: true },
      { name: "Chicken Biryani", desc: "Bone-in chicken layered with saffron rice, fried onions and fresh mint.", price: "$42.000", img: "/images/g-biryani-2.jpg", spicy: true },
      { name: "Fish Curry & Rice", desc: "Fish simmered with onion, ginger and garlic, with two chapati or basmati rice and salad.", price: "$45.000", img: "/images/m-fish-curry.jpg" },
      { name: "Fish Fillet", desc: "Grilled spiced fish fillet with fries, basmati rice, salad and garlic sauce.", price: "$40.000", img: "/images/m-fish-fillet.jpg" },
      { name: "Basmati Rice (Portion)", desc: "A generous portion of steamed basmati rice.", price: "$12.000", img: "/images/m-rice.jpg", veg: true },
      { name: "Dal Tadka", desc: "Yellow lentils tempered with cumin and garlic, with two chapati or rice.", price: "$30.000", img: "/images/m-dal.jpg", veg: true },
    ],
  },
  {
    slug: "curries",
    title: "Curries",
    intro: "Flavourful curries cooked with traditional spices and fresh ingredients.",
    items: [
      { name: "Chicken Curry", desc: "Juicy chicken in a rich, slow-cooked masala, with two chapati or basmati rice.", price: "$30.000", img: "/images/d-chicken-curry.jpg", spicy: true },
      { name: "Beef Kofta", desc: "Beef meatballs with oriental spices in an onion–tomato gravy.", price: "$48.000", img: "/images/d-beef-kofta.jpg" },
      { name: "Chana Curry", desc: "Chickpea curry with two chapati or basmati rice.", price: "$30.000", img: "/images/m-dal-fry.jpg", veg: true },
      { name: "Aloo Gosht", desc: "Tender mutton and potato in a home-style gravy.", price: "$38.000", img: "/images/g-aloo.jpg", spicy: true },
    ],
  },
  {
    slug: "vegetables",
    title: "Vegetarian",
    intro: "Traditional vegetarian dishes, rich in flavour and made with fresh ingredients.",
    items: [
      { name: "Mix Vegetable", desc: "Seasonal vegetables with two chapati or basmati rice.", price: "$30.000", img: "/images/d-mix-veg.jpg", veg: true },
      { name: "Aloo Palak", desc: "Spinach and potato cooked with onion, garlic, ginger and tomato.", price: "$35.000", img: "/images/m-palak.jpg", veg: true },
      { name: "Peas Paneer", desc: "Green peas and fresh cheese with two chapati or basmati rice.", price: "$35.000", img: "/images/m-paneer.jpg", veg: true },
      { name: "Paneer Karahi", desc: "Paneer tossed in a wok with onion, ginger, garlic and tomato.", price: "$35.000", img: "/images/m-karahi.jpg", veg: true, spicy: true },
    ],
  },
  {
    slug: "bbq",
    title: "BBQ & Grill",
    intro: "Marinated overnight, finished over open flame.",
    items: [
      { name: "Chicken Tikka Boti", desc: "Grilled chicken with traditional spices and mint chutney.", price: "$30.000", img: "/images/d-tikka.jpg", spicy: true },
      { name: "Seekh Kebab Platter", desc: "Minced skewers with rice, salad and raita.", price: "$42.000", img: "/images/g-kebab.jpg" },
      { name: "Mixed Platter", desc: "Curry, rice, salad and chapati — a little of everything.", price: "$45.000", img: "/images/g-platter.jpg" },
    ],
  },
  {
    slug: "breads",
    title: "Breads & Paratha",
    intro: "Hand-stretched and baked to order.",
    items: [
      { name: "Chapati", desc: "Whole-wheat flatbread, blistered on the tawa.", price: "$3.000", img: "/images/g-chapati.jpg", veg: true },
      { name: "Paratha Makhni", desc: "Flaky layered flatbread with butter.", price: "$10.000", img: "/images/g-naan.jpg", veg: true },
      { name: "Bread Basket", desc: "Chapati, naan and paratha for the table.", price: "$14.000", img: "/images/g-breads.jpg", veg: true },
    ],
  },
  {
    slug: "snacks",
    title: "Snacks",
    intro: "Small plates and street-food favourites.",
    items: [
      { name: "Samosa (2 pcs)", desc: "Crisp pastry with spiced potato and peas, with chutneys.", price: "$8.000", img: "/images/g-samosa.jpg", veg: true },
    ],
  },
  {
    slug: "desserts",
    title: "Desserts",
    intro: "Something sweet to close the meal.",
    items: [
      { name: "Gulab Jamun", desc: "Milk dumplings in cardamom–rose syrup.", price: "$9.000", img: "/images/g-gulab.jpg", veg: true },
    ],
  },
  {
    slug: "beverages",
    title: "Beverages",
    intro: "Cooling, sweet and spiced.",
    items: [
      { name: "Mango Lassi", desc: "Thick yoghurt blended with Alphonso mango.", price: "$7.000", img: "/images/g-mango-lassi.jpg", veg: true },
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
  mapsQuery: string;
  img: string;
  flagship?: boolean;
  hours: { days: string; time: string }[];
};

const stdHours = [
  { days: "Mon – Thu", time: "11:00 AM – 10:00 PM" },
  { days: "Fri – Sat", time: "11:00 AM – 11:00 PM" },
  { days: "Sunday", time: "11:00 AM – 10:00 PM" },
];

// NOTE: only the Chambersburg address comes from the brand mockups — the others are sample branches.
export const locations: Location[] = [
  { slug: "chambersburg", city: "Chambersburg, PA", name: "Chambersburg Flagship", address: "123 Main Street, Chambersburg, PA, USA", phone: "+1 (271) 555-0123", mapsQuery: "123 Main Street Chambersburg PA", img: "/images/storefront-night.jpg", flagship: true, hours: stdHours },
  { slug: "hagerstown", city: "Hagerstown, MD", name: "Hagerstown", address: "45 Potomac Street, Hagerstown, MD, USA", phone: "+1 (271) 555-0145", mapsQuery: "Potomac Street Hagerstown MD", img: "/images/storefront-day.jpg", hours: stdHours },
  { slug: "harrisburg", city: "Harrisburg, PA", name: "Harrisburg Midtown", address: "210 N 3rd Street, Harrisburg, PA, USA", phone: "+1 (271) 555-0168", mapsQuery: "N 3rd Street Harrisburg PA", img: "/images/interior-warm.jpg", hours: stdHours },
];

export const weeklyHours = [
  { day: "Monday", time: "11:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
  { day: "Thursday", time: "11:00 AM – 10:00 PM" },
  { day: "Friday", time: "11:00 AM – 11:00 PM" },
  { day: "Saturday", time: "11:00 AM – 11:00 PM" },
  { day: "Sunday", time: "11:00 AM – 10:00 PM" },
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
  { title: "Authentic Flavours", text: "Recipes from Lahore, Karachi and Delhi kitchens — no shortcuts.", icon: "leaf" },
  { title: "100% Halal", text: "Every cut, every stock, every sauce — certified and prepared with care.", icon: "halal" },
  { title: "Community First", text: "A long table for families, friends and anyone who's hungry.", icon: "people" },
  { title: "Quality Ingredients", text: "Whole spices toasted in-house; produce bought fresh every morning.", icon: "hand" },
] as const;
