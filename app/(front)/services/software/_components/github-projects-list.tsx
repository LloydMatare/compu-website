"use client";

import { useState } from "react";
import { CodeXml, ExternalLink, GitFork, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type GitHubProjectsResult,
  getProjectWebsite,
  GITHUB_PROFILE_URL,
  GITHUB_USERNAME,
} from "@/lib/github";

const PROJECTS_PER_PAGE = 6;

export default function GitHubProjectsList({
  result,
}: {
  result: GitHubProjectsResult;
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(result.repositories.length / PROJECTS_PER_PAGE);
  const currentPage = Math.min(page, Math.max(1, totalPages));
  const start = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleRepositories = result.repositories.slice(
    start,
    start + PROJECTS_PER_PAGE,
  );
  const linkClassName =
    "inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground md:text-xl">
            GitHub Projects
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Public repositories from {GITHUB_USERNAME}, most recently updated
            first.
          </p>
        </div>
        <a
          href={`${GITHUB_PROFILE_URL}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          <CodeXml className="h-4 w-4" aria-hidden="true" />
          View all on GitHub
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      {result.status === "error" ? (
        <p
          role="status"
          className="rounded-2xl border border-border/60 bg-card/50 p-6 text-sm text-muted-foreground"
        >
          Projects are temporarily unavailable. You can still browse them
          directly on GitHub using the link above.
        </p>
      ) : result.repositories.length === 0 ? (
        <p className="rounded-2xl border border-border/60 bg-card/50 p-6 text-sm text-muted-foreground">
          No public projects are available yet. New public repositories will
          appear here automatically.
        </p>
      ) : (
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleRepositories.map((repository) => {
            const website = getProjectWebsite(repository.homepage);

            return (
              <Card
                key={repository.id}
                className="h-full rounded-2xl border border-border/60 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <CodeXml className="h-5 w-5 text-brand" aria-hidden="true" />
                    {repository.fork && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-border/60 px-2 py-1">
                        <GitFork className="h-3 w-3" aria-hidden="true" />
                        Fork
                      </span>
                    )}
                    {repository.archived && <span>Archived</span>}
                  </div>
                  <CardTitle className="break-words font-display text-lg font-bold">
                    {repository.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {repository.description ||
                      "Explore this project and its source code on GitHub."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {repository.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1 text-xs text-brand"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repository.language && <span>{repository.language}</span>}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" aria-hidden="true" />
                      {repository.stargazers_count} stars
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-x-5 gap-y-3 border-t border-border/60 pt-5">
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                    aria-label={`View ${repository.name} on GitHub`}
                  >
                    Source code
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  {website && (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                      aria-label={`Visit ${repository.name} website`}
                    >
                      Visit website
                      <ExternalLink
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
      {result.status === "success" && totalPages > 0 && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p role="status" className="text-sm text-muted-foreground">
            Showing {start + 1}–
            {Math.min(start + PROJECTS_PER_PAGE, result.repositories.length)} of{" "}
            {result.repositories.length} projects
          </p>
          {totalPages > 1 && (
            <nav
              aria-label="Software projects pagination"
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                type="button"
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                type="button"
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setPage(currentPage + 1)}
              >
                Next
              </Button>
            </nav>
          )}
        </div>
      )}
    </div>
  );
}
