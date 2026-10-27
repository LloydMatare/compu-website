import assert from "node:assert/strict";
import test from "node:test";
import { getGitHubProjects, getProjectWebsite } from "../lib/github.ts";

test("loads public owner repositories with hourly caching", async () => {
  const repositories = [{ id: 1, name: "compu-website" }];
  const result = await getGitHubProjects(async (url, options) => {
    const request = new URL(url);
    assert.equal(request.pathname, "/users/LloydMatare/repos");
    assert.equal(request.searchParams.get("type"), "owner");
    assert.equal(request.searchParams.get("sort"), "updated");
    assert.equal(request.searchParams.get("direction"), "desc");
    assert.equal(request.searchParams.get("per_page"), "100");
    assert.equal(options.next.revalidate, 3600);
    assert.ok(options.signal instanceof AbortSignal);
    assert.equal(options.headers.Accept, "application/vnd.github+json");
    return Response.json(repositories);
  });

  assert.deepEqual(result, { status: "success", repositories });
});

test("follows pagination and preserves repository ordering", async () => {
  const pages = [];
  const result = await getGitHubProjects(async (url) => {
    const page = new URL(url).searchParams.get("page");
    pages.push(page);
    return Response.json([{ id: Number(page) }], {
      headers:
        page === "1"
          ? { link: '<https://api.github.com/example?page=2>; rel="next"' }
          : {},
    });
  });

  assert.deepEqual(pages, ["1", "2"]);
  assert.deepEqual(result.repositories, [{ id: 1 }, { id: 2 }]);
});

test("handles an empty account", async () => {
  const result = await getGitHubProjects(async () => Response.json([]));
  assert.deepEqual(result, { status: "success", repositories: [] });
});

test("handles HTTP errors, malformed responses, and network failures", async () => {
  for (const fetcher of [
    async () => new Response(null, { status: 403 }),
    async () => new Response(null, { status: 404 }),
    async () => new Response(null, { status: 500 }),
    async () => Response.json({ message: "unexpected data" }),
    async () => new Response("not json"),
    async () => {
      throw new Error("network unavailable");
    },
  ]) {
    assert.deepEqual(await getGitHubProjects(fetcher), {
      status: "error",
      repositories: [],
    });
  }
});

test("does not display incomplete results if a later page fails", async () => {
  const result = await getGitHubProjects(async (url) =>
    new URL(url).searchParams.get("page") === "1"
      ? Response.json([{ id: 1 }], {
          headers: {
            link: '<https://api.github.com/example?page=2>; rel="next"',
          },
        })
      : new Response(null, { status: 503 }),
  );
  assert.deepEqual(result, { status: "error", repositories: [] });
});

test("allows only HTTP and HTTPS project websites", () => {
  assert.equal(
    getProjectWebsite("https://example.com"),
    "https://example.com/",
  );
  assert.equal(
    getProjectWebsite("http://example.com/demo"),
    "http://example.com/demo",
  );
  for (const homepage of [
    null,
    "",
    "example.com",
    "javascript:alert(1)",
    "data:text/html,test",
    "ftp://example.com",
  ]) {
    assert.equal(getProjectWebsite(homepage), null);
  }
});
