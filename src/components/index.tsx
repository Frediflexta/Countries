import { createRoot } from "react-dom/client";

const Application = () => {
  return <h1>Rest Countries Api Begins 🇳🇬</h1>;
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(<Application />);
