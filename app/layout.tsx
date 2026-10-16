import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ClientExtras from "@/components/ClientExtras";
import MotionProvider from "@/components/MotionProvider";
import { site, locations } from "@/lib/data";

const fraunces = localFont({
  src: "./fonts/Fraunces.woff2",
  variable: "--font-fraunces",
  weight: "300 700",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
const frauncesItalic = localFont({
  src: "./fonts/Fraunces-Italic.woff2",
  variable: "--font-fraunces-italic",
  weight: "400 700",
  style: "italic",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});
const manrope = localFont({
  src: "./fonts/Manrope.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Chapati Halal — Authentic Indian & Pakistani Cuisine",
    template: "%s · Chapati Halal",
  },
  description: site.description,
  keywords: ["halal restaurant", "Pakistani food", "Indian food", "biryani", "chapati", "karahi", "Chambersburg"],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Chapati Halal — Authentic Indian & Pakistani Cuisine",
    description: site.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Chapati Halal" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#0e3b2c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: ["Pakistani", "Indian", "Halal"],
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  image: `${site.url}/og.jpg`,
  department: locations.map((l) => ({
    "@type": "Restaurant",
    name: `${site.name} — ${l.name}`,
    address: l.address,
    telephone: l.phone,
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${frauncesItalic.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-saffron focus:px-5 focus:py-3 focus:font-bold">
          Skip to content
        </a>
        <MotionProvider>
          <SmoothScroll />
          <ClientExtras />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
