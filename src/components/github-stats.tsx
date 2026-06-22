"use client";

import {
  ArrowUpRight,
  BookOpen,
  GitFork,
  Github,
  LoaderCircle,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

type GithubData = {
  profile: {
    login: string;
    name: string | null;
    avatarUrl: string;
    bio: string | null;
    followers: number;
    following: number;
    publicRepos: number;
    htmlUrl: string;
  };
  stats: {
    repositories: number;
    stars: number;
    contributions: number | null;
    recentActivity: number;
  };
  languages: { name: string; count: number }[];
  repositories: {
    id: number;
    name: string;
    description: string | null;
    url: string;
    homepage: string | null;
    language: string | null;
    stars: number;
    forks: number;
    updatedAt: string;
  }[];
};

const languageColors: Record<string, string> = {
  Java: "#f97316",
  Python: "#3b82f6",
  JavaScript: "#facc15",
  TypeScript: "#60a5fa",
  HTML: "#ef4444",
  CSS: "#a855f7",
  "C++": "#ec4899",
};

export function GithubStats() {
  const [data, setData] = useState<GithubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((response) => {
        if (!response.ok) throw new Error("Failed");
        return response.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Open source"
            title="Building in public."
            description="Live data from my GitHub profile—projects, tools, experiments, and the trail of steady improvement behind them."
          />
          <Button asChild variant="outline" className="mb-12 w-fit md:mb-16">
            <a
              href="https://github.com/anujkr09"
              target="_blank"
              rel="noreferrer"
            >
              View profile <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        {!data && !error && (
          <div className="grid min-h-64 place-items-center rounded-[2rem] border border-white/[.08] bg-white/[.025]">
            <div className="text-center text-slate-500">
              <LoaderCircle className="mx-auto mb-3 size-6 animate-spin text-cyan-300" />
              Loading live GitHub activity
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-[2rem] border border-white/[.08] bg-white/[.025] p-10 text-center">
            <Github className="mx-auto size-8 text-slate-500" />
            <p className="mt-4 text-slate-400">
              GitHub is taking a short coffee break. The profile is still
              available directly.
            </p>
          </div>
        )}

        {data && (
          <Reveal>
            <div className="overflow-hidden rounded-[2.2rem] border border-white/[.09] bg-slate-900/50 shadow-card">
              <div className="grid border-b border-white/[.08] lg:grid-cols-[.75fr_1.25fr]">
                <div className="border-b border-white/[.08] p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-4">
                    {/* GitHub-hosted avatar is intentionally a normal img: its URL is dynamic. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={data.profile.avatarUrl}
                      alt={`${data.profile.name ?? "Anuj Kumar"} on GitHub`}
                      width={68}
                      height={68}
                      loading="lazy"
                      className="size-16 rounded-2xl border border-white/10 bg-slate-800 object-cover"
                    />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {data.profile.name ?? "Anuj Kumar"}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-cyan-300">
                        @{data.profile.login}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-6 text-slate-400">
                    {data.profile.bio ??
                      "Full stack developer exploring Java, web engineering, and intelligent systems."}
                  </p>
                  <div className="mt-6 flex gap-5 text-xs text-slate-500">
                    <span className="flex items-center gap-2">
                      <Users className="size-4" />
                      {data.profile.followers} followers
                    </span>
                    <span>{data.profile.following} following</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4">
                  {[
                    {
                      label: "Repositories",
                      value: data.stats.repositories,
                      icon: BookOpen,
                    },
                    {
                      label: "Total stars",
                      value: data.stats.stars,
                      icon: Star,
                    },
                    {
                      label: data.stats.contributions
                        ? "Contributions"
                        : "Recent activity",
                      value:
                        data.stats.contributions ??
                        data.stats.recentActivity,
                      icon: Github,
                    },
                    {
                      label: "Languages",
                      value: data.languages.length,
                      icon: GitFork,
                    },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="border-b border-r border-white/[.07] p-6 last:border-r-0 md:border-b-0"
                    >
                      <Icon className="size-4 text-cyan-300" />
                      <p className="mt-6 font-display text-3xl font-semibold text-white">
                        {value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-600">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-[.35fr_.65fr]">
                <div className="border-b border-white/[.08] p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">
                    Languages used
                  </p>
                  <div className="mt-7 space-y-5">
                    {data.languages.map((language) => {
                      const max = data.languages[0]?.count || 1;
                      return (
                        <div key={language.name}>
                          <div className="mb-2 flex justify-between text-xs">
                            <span className="flex items-center gap-2 text-slate-300">
                              <i
                                className="size-2 rounded-full"
                                style={{
                                  background:
                                    languageColors[language.name] ?? "#06b6d4",
                                }}
                              />
                              {language.name}
                            </span>
                            <span className="text-slate-600">
                              {language.count} repos
                            </span>
                          </div>
                          <div className="h-1 rounded-full bg-white/[.06]">
                            <div
                              className="h-1 rounded-full"
                              style={{
                                width: `${(language.count / max) * 100}%`,
                                background:
                                  languageColors[language.name] ?? "#06b6d4",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">
                      Recently updated
                    </p>
                    <span className="text-[10px] text-emerald-300">
                      ● Live from GitHub
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {data.repositories.slice(0, 4).map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-2xl border border-white/[.07] bg-white/[.025] p-5 transition-all hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[.045]"
                      >
                        <div className="flex items-start justify-between">
                          <BookOpen className="size-4 text-cyan-300" />
                          <ArrowUpRight className="size-4 text-slate-600 transition-colors group-hover:text-white" />
                        </div>
                        <h4 className="mt-5 truncate font-display text-sm font-semibold text-white">
                          {repo.name}
                        </h4>
                        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">
                          {repo.description ?? "A project from my GitHub workspace."}
                        </p>
                        <div className="mt-4 flex items-center gap-4 text-[10px] text-slate-600">
                          {repo.language && <span>{repo.language}</span>}
                          <span className="flex items-center gap-1">
                            <Star className="size-3" /> {repo.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="size-3" /> {repo.forks}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
