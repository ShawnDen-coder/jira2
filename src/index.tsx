import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadDevTools } from "jira-dev-tool";
import { AppProviders } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

loadDevTools(() =>
  root.render(
    <AppProviders>
      <App />
    </AppProviders>
  )
);
