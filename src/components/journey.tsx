"use client";

import { useState } from "react";
import {
  Award,
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  Trophy,
  X,
} from "lucide-react";
import { achievements, certifications } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Journey() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);

  return (
    <section id="journey" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Learning, competing, progressing."
          description="A growing record of education, ambitious challenges, and industry-recognized learning."
        />

        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2.2rem] border border-white/[.08] bg-slate-900/40 p-7 sm:p-9">
              <div className="mb-9 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-amber-400/10 text-amber-300">
                  <Trophy className="size-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-white">
                    Achievements
                  </p>
                  <p className="text-xs text-slate-500">
                    Milestones that shaped my momentum
                  </p>
                </div>
              </div>
              <div className="relative space-y-8 before:absolute before:bottom-3 before:left-[7px] before:top-3 before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:to-violet-400/10">
                {achievements.map((achievement) => (
                  <div key={achievement.title} className="relative pl-9">
                    <span className="absolute left-0 top-1.5 size-[15px] rounded-full border-4 border-slate-900 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,.5)]" />
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {achievement.title}
                      </h3>
                      <span className="rounded-full border border-white/[.08] bg-white/[.035] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        {achievement.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {achievement.detail}
                    </p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                      {achievement.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2.2rem] border border-white/[.08] bg-gradient-to-br from-blue-500/10 via-slate-900/60 to-violet-500/10 p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
                    Education
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="mt-3 text-slate-400">SISTec Gandhinagar</p>
                </div>
                <span className="hidden size-14 place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-violet-300 sm:grid">
                  <GraduationCap className="size-6" />
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[.07] bg-slate-950/25 p-5">
                  <CalendarDays className="size-4 text-cyan-300" />
                  <p className="mt-4 font-display text-xl font-semibold text-white">
                    2023—2027
                  </p>
                  <p className="mt-1 text-xs text-slate-600">Academic term</p>
                </div>
                <div className="rounded-2xl border border-white/[.07] bg-slate-950/25 p-5">
                  <BookOpenCheck className="size-4 text-cyan-300" />
                  <p className="mt-4 font-display text-xl font-semibold text-white">
                    7.0 CGPA
                  </p>
                  <p className="mt-1 text-xs text-slate-600">Current score</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/[.07] bg-white/[.025] p-5">
                <p className="text-sm leading-6 text-slate-400">
                  Building a strong foundation in data structures, software
                  engineering, database systems, object-oriented programming,
                  and intelligent computing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8">
          <div className="mb-7 flex items-center gap-3">
            <Award className="size-5 text-cyan-300" />
            <h3 className="font-display text-xl font-semibold text-white">
              Certifications
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification, index) => (
              <Reveal
                key={`${certification.name}-${index}`}
                delay={(index % 4) * 0.06}
              >
                <article
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedCertificate(certification)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedCertificate(certification);
                    }
                  }}
                  className="group h-full cursor-pointer rounded-3xl border border-white/[.08] bg-white/[.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[.045] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 font-display text-xs font-bold text-cyan-200">
                      {certification.mark}
                    </span>
                    <Award className="size-4 text-slate-700 transition-colors group-hover:text-cyan-300" />
                  </div>
                  <h4 className="mt-6 font-display text-sm font-semibold leading-6 text-white">
                    {certification.name}
                  </h4>
                  <p className="mt-2 text-xs uppercase tracking-wider text-slate-600">
                    {certification.issuer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-[2rem] border border-white/[.08] bg-slate-900 p-4 shadow-2xl shadow-cyan-950/30"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/10 bg-white/[.04] text-slate-300 transition hover:bg-white/[.08] hover:text-white"
              aria-label="Close certificate preview"
            >
              <X className="size-4" />
            </button>

            <div className="mb-4 pr-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Certificate Preview
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                {selectedCertificate.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {selectedCertificate.issuer}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/[.08] bg-white">
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.name} by ${selectedCertificate.issuer}`}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
