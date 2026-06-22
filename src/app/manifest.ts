import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anuj Kumar — Developer Portfolio",
    short_name: "Anuj Kumar",
    description:
      "Full Stack Developer, Java Developer, and AI & ML Enthusiast.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0F172A",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
