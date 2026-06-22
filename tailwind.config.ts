import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        surface: "#111827",
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#06B6D4",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(59,130,246,.18)",
        card: "0 20px 70px rgba(2,6,23,.35)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
