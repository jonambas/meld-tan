import { renderToString } from "react-dom/server";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function render(url: string) {
  const router = createRouter({ routeTree });
  const html = renderToString(<RouterProvider router={router} />);
  return { html };
}
