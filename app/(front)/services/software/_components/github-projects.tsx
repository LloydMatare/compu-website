import { getGitHubProjects } from "@/lib/github";
import GitHubProjectsList from "./github-projects-list";

export default async function GitHubProjects() {
  const result = await getGitHubProjects();

  return <GitHubProjectsList result={result} />;
}
