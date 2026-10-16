import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    changeFrequency: n.href === "/menu" ? "weekly" : "monthly",
    priority: n.href === "/" ? 1 : 0.8,
  }));
}
