"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Github,
} from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas shipped as useful software."
          description="A selection of systems that combine practical engineering, thoughtful experiences, and a bias toward solving real problems."
        />

        <div className="space-y-7">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group grid overflow-hidden rounded-[2.2rem] border border-white/[.09] bg-slate-900/45 shadow-card lg:grid-cols-[1.05fr_.95fr]"
                >
                  <div
                    className={`relative min-h-[340px] overflow-hidden bg-gradient-to-br ${project.gradient} p-7 sm:p-10`}
                  >
                    <div className="absolute inset-0 bg-grid bg-[size:36px_36px] opacity-30" />
                    <div className="absolute -bottom-32 -right-20 size-80 rounded-full border border-white/10 bg-white/[.035]" />
                    <div className="absolute -bottom-20 -right-5 size-56 rounded-full border border-white/10" />
                    <div className="relative flex items-center justify-between">
                      <span className="font-mono text-xs tracking-[.2em] text-white/45">
                        PROJECT / {project.number}
                      </span>
                      <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[.07] text-white backdrop-blur-md">
                        <Icon className="size-5" />
                      </span>
                    </div>

                    <div className="relative mt-16 rounded-[1.7rem] border border-white/10 bg-slate-950/65 p-3 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.015]">
                      <div className="flex items-center gap-1.5 border-b border-white/[.07] px-3 py-2.5">
                        <span className="size-2 rounded-full bg-red-400/70" />
                        <span className="size-2 rounded-full bg-amber-400/70" />
                        <span className="size-2 rounded-full bg-emerald-400/70" />
                        <span className="ml-3 rounded-md bg-white/[.045] px-3 py-1 font-mono text-[8px] text-slate-600">
                          {project.title.toLowerCase().replaceAll(" ", "-")}.app
                        </span>
                      </div>
                      <div className="grid min-h-36 grid-cols-[.35fr_.65fr] gap-3 p-3">
                        <div className="space-y-2 rounded-xl bg-white/[.035] p-3">
                          {[70, 90, 55, 80].map((width, item) => (
                            <div
                              key={item}
                              className="h-2 rounded-full bg-white/[.07]"
                              style={{ width: `${width}%` }}
                            />
                          ))}
                        </div>
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/15 p-4">
                          <div className="h-3 w-20 rounded-full bg-white/15" />
                          <div className="mt-5 grid grid-cols-3 gap-2">
                            {[1, 2, 3].map((item) => (
                              <div
                                key={item}
                                className="h-14 rounded-lg border border-white/[.07] bg-white/[.045]"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                    <p
                      className={`text-xs font-bold uppercase tracking-[.22em] ${project.accent}`}
                    >
                      {project.kicker}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 leading-7 text-slate-400">
                      {project.description}
                    </p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <span className="grid size-5 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
                            <Check className="size-3" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/[.08] bg-white/[.035] px-3 py-1.5 text-[11px] font-semibold text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-9">
                      {project.live && (
                        <Button asChild variant="gradient">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live demo <ArrowUpRight className="size-4" />
                          </a>
                        </Button>
                      )}
                      <Button asChild variant="outline">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="size-4" /> GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
