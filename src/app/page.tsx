import { About } from "@/components/about";
import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { GithubStats } from "@/components/github-stats";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://anuj-kumar.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anuj Kumar",
  url: siteUrl,
  email: "mailto:anujkumar812032@gmail.com",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer, Java Developer, and AI & Machine Learning Enthusiast based in Bhopal, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/anujkr09",
    "https://linkedin.com/in/anuj-kumar",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SISTec Gandhinagar",
  },
  knowsAbout: [
    "Full Stack Development",
    "Java",
    "Spring Boot",
    "React",
    "Machine Learning",
    "Python",
    "Database Management",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
