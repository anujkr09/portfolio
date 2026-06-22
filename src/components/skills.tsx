"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit for complete products."
          description="From interface craft to backend architecture and applied machine learning, I work across the stack to move ideas from concept to working software."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={(index % 3) * 0.08}>
                <article className="group h-full rounded-[2rem] border border-white/[.08] bg-slate-900/40 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/15 hover:bg-slate-900/65 hover:shadow-card">
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${group.color} text-white shadow-lg`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[.2em] text-slate-600">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {group.description}
                  </p>
                  <div className="mt-7 space-y-5">
                    {group.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-300">
                            {skill.name}
                          </span>
                          <span className="font-mono text-slate-600">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-white/[.06]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.15,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
