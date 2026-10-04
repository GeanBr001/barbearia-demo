import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

function createTestRouter(path: string) {
  return createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
  });
}

describe("rotas", () => {
  it("carrega a página inicial", async () => {
    const router = createTestRouter("/");
    await router.load();

    expect(router.state.location.pathname).toBe("/");
    expect(router.state.matches.some((match) => match.routeId === "/")).toBe(true);
  });

  it("não encontra uma rota inexistente (cai no 404)", async () => {
    const router = createTestRouter("/essa-rota-nao-existe");
    await router.load();

    expect(router.state.matches.some((match) => match.routeId === "/")).toBe(false);
  });
});
