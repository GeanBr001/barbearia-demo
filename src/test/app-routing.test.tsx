import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { afterEach, describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

function createTestRouter(path: string) {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
}

afterEach(() => {
  document.documentElement.classList.remove("dark");
});

describe("App routing", () => {
  it("loads the index route", async () => {
    const router = createTestRouter("/");

    await router.load();

    expect(router.state.location.pathname).toBe("/");
    expect(router.state.matches.some((match) => match.routeId === "/")).toBe(true);
  });

  it("loads the not-found route", async () => {
    const router = createTestRouter("/this-route-does-not-exist");

    await router.load();

    expect(router.state.location.pathname).toBe("/this-route-does-not-exist");
    expect(router.state.matches.length).toBeGreaterThan(0);
  });
});
