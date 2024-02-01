import { createRoot } from "react-dom/client";
import Application from "./components/Application";
import React from "react";

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
