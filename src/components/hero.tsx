"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  BrainCircuit,
  Code2,
  Coffee,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full Stack Developer",
  "MERN Developer",
  "Java Developer",
  "DSA & C++ Learner",
  "AI & ML Enthusiast",
];

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const done = display === role;
    const empty = display === "";
    const timeout = window.setTimeout(
      () => {
        if (done && !deleting) setDeleting(true);
        else if (empty && deleting) {
          setDeleting(false);
          setRoleIndex((index) => (index + 1) % roles.length);
        } else {
          setDisplay(
            deleting
              ? role.slice(0, Math.max(0, display.length - 1))
              : role.slice(0, display.length + 1),
          );
        }
      },
      done && !deleting ? 1600 : deleting ? 42 : 75,
    );
    return () => window.clearTimeout(timeout);
  }, [display, deleting, roleIndex]);

  return (
    <span className="text-gradient">
      {display}
      <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-1 bg-cyan-300 animate-pulse" />
    </span>
  );
}

const techIcons = [
  { Icon: Code2, label: "React", className: "-left-3 top-20 md:-left-12" },
  {
    Icon: Coffee,
    label: "Java",
    className: "-right-2 top-5 md:-right-12",
  },
  {
    Icon: BrainCircuit,
    label: "AI",
    className: "-right-5 bottom-20 md:-right-16",
  },
  {
    Icon: Braces,
    label: "API",
    className: "left-2 -bottom-2 md:-left-8",
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.12fr_.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[.07] px-4 py-2 text-xs font-semibold text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships &amp; collaborations
          </div>

          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[.28em] text-slate-400">
            Hello, I&apos;m
          </p>
          <h1 className="font-display text-[clamp(4rem,10vw,8.4rem)] font-semibold leading-[.82] tracking-[-.075em] text-white">
            ANUJ
            <br />
            <span className="text-outline">KUMAR</span>
          </h1>

          <div className="mt-8 min-h-9 font-display text-xl font-semibold tracking-tight sm:text-2xl">
            <TypingRole />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Building scalable applications, intelligent systems, and modern
            digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gradient" size="lg">
              <a href="#projects">
                View projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/api/resume">
                <Download className="size-4" /> Download resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">Contact me</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {[
              {
                href: "https://github.com/anujkr09",
                Icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/anuj-kumar-7415102a6/",
                Icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:anujkumar812032@gmail.com",
                Icon: Mail,
                label: "Email",
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[.035] text-slate-400 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <span className="ml-2 hidden h-5 w-px bg-white/10 sm:block" />
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="size-4 text-cyan-400" />
              Bhopal, India
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-500/30 to-violet-500/20 blur-[80px]" />
          <div className="relative mx-auto aspect-[.86] max-w-[430px]">
            <div className="absolute inset-0 rotate-3 rounded-[3rem] border border-cyan-400/15 bg-gradient-to-b from-blue-500/10 to-violet-500/5" />
            <div className="absolute inset-3 -rotate-2 overflow-hidden rounded-[2.65rem] border border-white/10 bg-slate-900/70 p-4 shadow-card backdrop-blur-2xl">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2.15rem] border border-white/[.07] bg-gradient-to-br from-slate-800 to-slate-950 p-7">
                <div className="absolute inset-0 bg-grid bg-[size:34px_34px] opacity-30" />
                <div className="relative flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <Terminal className="size-4 text-cyan-400" /> anuj.dev
                  </span>
                  <span className="flex gap-1.5">
                    <i className="size-2 rounded-full bg-red-400/80" />
                    <i className="size-2 rounded-full bg-amber-400/80" />
                    <i className="size-2 rounded-full bg-emerald-400/80" />
                  </span>
                </div>

                <div className="relative my-auto">
                  <div className="mb-6 grid size-24 place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 shadow-glow">
                    <span className="font-display text-3xl font-bold text-white">
                      AK
                    </span>
                  </div>
                  <div className="font-mono text-sm leading-7 text-slate-400">
                    <p>
                      <span className="text-violet-400">const</span>{" "}
                      <span className="text-cyan-300">developer</span> = {"{"}
                    </p>
                    <p className="pl-5">
                      focus:{" "}
                      <span className="text-emerald-300">
                        &quot;useful software&quot;
                      </span>
                      ,
                    </p>
                    <p className="pl-5">
                      mindset:{" "}
                      <span className="text-emerald-300">
                        &quot;always learning&quot;
                      </span>
                      ,
                    </p>
                    <p className="pl-5">
                      status:{" "}
                      <span className="text-emerald-300">
                        &quot;building&quot;
                      </span>
                    </p>
                    <p>{"}"}</p>
                  </div>
                </div>

                <div className="relative flex items-center gap-3 rounded-2xl border border-white/[.08] bg-white/[.035] p-4">
                  <span className="grid size-9 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Sparkles className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Current direction</p>
                    <p className="text-sm font-semibold text-white">
                      Full stack + intelligent systems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {techIcons.map(({ Icon, label, className }, index) => (
              <motion.div
                key={label}
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{
                  duration: 3.5 + index * 0.4,
                  delay: index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute ${className} flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-semibold text-slate-300 shadow-card backdrop-blur-xl`}
              >
                <Icon className="size-4 text-cyan-300" />
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[.25em] text-slate-600 lg:flex"
      >
        Scroll
        <ArrowDown className="size-4 animate-bounce text-cyan-400" />
      </a>
    </section>
  );
}
