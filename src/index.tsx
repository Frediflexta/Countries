import { createRoot } from "react-dom/client";
import Application from "./components/Application";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Application />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
);
