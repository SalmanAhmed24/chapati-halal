import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chapati Halal — Cocina India Pakistan",
    short_name: "Chapati Halal",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf4e6",
    theme_color: "#0e3b2c",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
