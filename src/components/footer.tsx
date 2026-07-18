import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { codingProfiles, profileLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/[.07]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            ANUJ<span className="text-cyan-400">.</span>
          </p>
          <p className="mt-1 text-xs text-slate-600">
            © 2026 Anuj Kumar. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            {
              href: profileLinks.github,
              label: "GitHub",
              Icon: Github,
            },
            {
              href: profileLinks.linkedin,
              label: "LinkedIn",
              Icon: Linkedin,
            },
            {
              href: profileLinks.email,
              label: "Email",
              Icon: Mail,
            },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-full text-slate-600 transition-colors hover:bg-white/[.05] hover:text-white"
            >
              <Icon className="size-4" />
            </a>
          ))}
          {codingProfiles.map(({ href, label, shortLabel }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-full font-mono text-[9px] font-bold text-slate-600 transition-colors hover:bg-white/[.05] hover:text-white"
            >
              {shortLabel}
            </a>
          ))}
        </div>
        <a
          href="#home"
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors hover:text-cyan-300"
        >
          Back to top <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
