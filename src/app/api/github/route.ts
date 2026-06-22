import { NextResponse } from "next/server";

const USERNAME = "anujkr09";
const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
};

async function getContributionCount() {
  if (!process.env.GITHUB_TOKEN) return null;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionCalendar { totalContributions }
          }
        }
      }`,
      variables: { login: USERNAME },
    }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) return null;
  const json = await response.json();
  return (
    json?.data?.user?.contributionsCollection?.contributionCalendar
      ?.totalContributions ?? null
  );
}

export async function GET() {
  try {
    const [profileResponse, reposResponse, eventsResponse, contributions] =
      await Promise.all([
        fetch(`https://api.github.com/users/${USERNAME}`, {
          headers,
          next: { revalidate: 3600 },
        }),
        fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
          { headers, next: { revalidate: 3600 } },
        ),
        fetch(
          `https://api.github.com/users/${USERNAME}/events/public?per_page=100`,
          { headers, next: { revalidate: 1800 } },
        ),
        getContributionCount(),
      ]);

    if (!profileResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub API request failed");
    }

    const profile = await profileResponse.json();
    const allRepos: Repository[] = await reposResponse.json();
    const events = eventsResponse.ok ? await eventsResponse.json() : [];
    const repos = allRepos.filter((repo) => !repo.fork);
    const languageMap = repos.reduce<Record<string, number>>((acc, repo) => {
      if (repo.language) acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      return acc;
    }, {});
    const languages = Object.entries(languageMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    return NextResponse.json(
      {
        profile: {
          login: profile.login,
          name: profile.name,
          avatarUrl: profile.avatar_url,
          bio: profile.bio,
          followers: profile.followers,
          following: profile.following,
          publicRepos: profile.public_repos,
          htmlUrl: profile.html_url,
        },
        stats: {
          repositories: profile.public_repos,
          stars: repos.reduce(
            (total, repo) => total + repo.stargazers_count,
            0,
          ),
          contributions,
          recentActivity: events.length,
        },
        languages,
        repositories: repos.slice(0, 6).map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.updated_at,
        })),
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=1800, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to load GitHub data right now." },
      { status: 502 },
    );
  }
}
