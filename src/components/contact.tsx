"use client";

import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
  XCircle,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const form = event.currentTarget;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/55 p-6 shadow-card sm:p-10 lg:p-14">
          <div className="absolute -left-24 -top-24 size-80 rounded-full bg-blue-500/15 blur-[90px]" />
          <div className="absolute -bottom-32 -right-20 size-96 rounded-full bg-violet-500/15 blur-[100px]" />
          <div className="relative grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Start a conversation"
                title="Have an idea? Let's build it."
                description="I'm open to internships, freelance work, ambitious collaborations, and conversations about useful technology."
              />

              <div className="space-y-4">
                <a
                  href="mailto:anujkumar812032@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[.08] bg-white/[.025] p-4 transition-colors hover:bg-white/[.045]"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-blue-500/10 text-cyan-300">
                    <Mail className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <small className="block text-xs text-slate-600">Email</small>
                    <span className="block truncate text-sm text-slate-300">
                      anujkumar812032@gmail.com
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-4 text-slate-700 transition-colors group-hover:text-white" />
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/[.08] bg-white/[.025] p-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-violet-500/10 text-violet-300">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <small className="block text-xs text-slate-600">
                      Location
                    </small>
                    <span className="text-sm text-slate-300">
                      Bhopal, Madhya Pradesh, India
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href="https://github.com/anujkr09"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid size-11 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  <Github className="size-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-kumar-7415102a6/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-11 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  <Linkedin className="size-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-white/[.08] bg-slate-950/35 p-5 sm:p-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="form-label">
                    Name
                    <input
                      required
                      name="from_name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Email
                    <input
                      required
                      type="email"
                      name="reply_to"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="form-input"
                    />
                  </label>
                </div>
                <label className="form-label mt-5">
                  Subject
                  <input
                    required
                    name="subject"
                    placeholder="What would you like to build?"
                    className="form-input"
                  />
                </label>
                <label className="form-label mt-5">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Tell me about the opportunity, problem, or idea..."
                    className="form-input resize-none"
                  />
                </label>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <LoaderCircle className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    {status === "loading" ? "Sending..." : "Send message"}
                  </Button>
                  {status === "success" && (
                    <p
                      role="status"
                      className="flex items-center gap-2 text-sm text-emerald-300"
                    >
                      <CheckCircle2 className="size-4" />
                      Message sent successfully.
                    </p>
                  )}
                  {status === "error" && (
                    <p
                      role="alert"
                      className="flex items-center gap-2 text-sm text-rose-300"
                    >
                      <XCircle className="size-4" />
                      Unable to send. Please email me directly.
                    </p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
