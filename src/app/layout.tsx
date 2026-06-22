import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://anuj-kumar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anuj Kumar — Full Stack Developer",
    template: "%s | Anuj Kumar",
  },
  description:
    "Portfolio of Anuj Kumar, a full stack and Java developer building scalable applications, intelligent systems, and modern digital experiences.",
  keywords: [
    "Anuj Kumar",
    "Full Stack Developer",
    "Java Developer",
    "Machine Learning",
    "React Developer",
    "Spring Boot Developer",
    "Bhopal Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Anuj Kumar", url: siteUrl }],
  creator: "Anuj Kumar",
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Anuj Kumar — Full Stack Developer",
    description:
      "Building scalable applications, intelligent systems, and modern digital experiences.",
    siteName: "Anuj Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuj Kumar — Full Stack Developer",
    description:
      "Building scalable applications, intelligent systems, and modern digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-ink font-sans text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
