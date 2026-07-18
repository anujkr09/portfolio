import {
  BrainCircuit,
  CodeXml,
  DatabaseZap,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { githubHighlights } from "@/lib/data";

const focusAreas = [
  {
    icon: CodeXml,
    title: "Product engineering",
    text: "Thoughtful interfaces backed by clean, reliable application logic.",
  },
  {
    icon: BrainCircuit,
    title: "Applied intelligence",
    text: "Machine learning experiments shaped into practical user value.",
  },
  {
    icon: DatabaseZap,
    title: "Data-driven systems",
    text: "Structured databases and APIs designed for dependable growth.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="About me"
              title="Curious by nature. Built to create."
            />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-blue-500/15 via-white/[.03] to-violet-500/10 p-7 shadow-card">
              <div className="absolute -right-16 -top-16 size-44 rounded-full bg-cyan-400/10 blur-3xl" />
              <p className="relative text-xl font-medium leading-8 text-slate-200">
                I turn complex technical challenges into focused, useful
                digital products.
              </p>
              <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-400">
                <MapPin className="size-4 text-cyan-300" />
                Based in Bhopal, Madhya Pradesh
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl leading-9 text-slate-300 md:text-2xl md:leading-10">
              I&apos;m a Computer Science Engineering student with strong
              expertise in{" "}
              <span className="text-white">full stack development</span>, MERN,
              Java, Python, C++, SQL, machine learning, databases, and software
              engineering.
            </p>
            <p className="mt-6 leading-8 text-slate-400">
              I&apos;m passionate about building scalable applications,
              AI-powered solutions, and user-friendly digital products. My
              GitHub shows hands-on work across React, HTML, CSS, Bootstrap,
              JavaScript, MERN-style apps, Java desktop software, SQL-backed
              systems, Python automation, machine learning labs, and DSA/OOP
              practice.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-3xl border border-white/[.08] bg-white/[.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[.045]"
                >
                  <span className="mb-4 grid size-10 place-items-center rounded-xl bg-blue-500/10 text-cyan-300 transition-transform group-hover:rotate-3">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-sm font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="font-display text-3xl font-semibold text-white">
                  2027
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Graduation
                </p>
              </div>
              <span className="h-12 w-px bg-white/10" />
              <div>
                <p className="font-display text-3xl font-semibold text-white">
                  7+
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  Certifications
                </p>
              </div>
              <span className="h-12 w-px bg-white/10" />
              <div>
                <p className="font-display text-3xl font-semibold text-white">
                  19
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  GitHub repos
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {githubHighlights.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/[.08] bg-slate-950/30 p-5"
                >
                  <Icon className="size-5 text-cyan-300" />
                  <p className="mt-4 font-display text-sm font-semibold text-white">
                    {label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
