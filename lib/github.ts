export const GITHUB_USERNAME = "LloydMatare";
export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
}

export type GitHubProjectsResult =
  | { status: "success"; repositories: GitHubRepository[] }
  | { status: "error"; repositories: [] };

export function getProjectWebsite(homepage: string | null): string | null {
  if (!homepage) return null;

  try {
    const url = new URL(homepage);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export async function getGitHubProjects(
  fetcher: typeof fetch = fetch,
): Promise<GitHubProjectsResult> {
  const repositories: GitHubRepository[] = [];

  try {
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
      const response = await fetcher(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&direction=desc&per_page=100&page=${page}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
          next: { revalidate: 3600 },
          signal: AbortSignal.timeout(10000),
        },
      );

      if (!response.ok)
        throw new Error(`GitHub responded with ${response.status}`);

      const batch: GitHubRepository[] = await response.json();
      repositories.push(...batch);
      hasNextPage = /rel="next"/.test(response.headers.get("link") ?? "");
      page += 1;
    }

    return { status: "success", repositories };
  } catch {
    return { status: "error", repositories: [] };
  }
}
