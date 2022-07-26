import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DevTools, loadServer } from "jira-dev-tool";
// 务必在jira-dev-tool 后面引入less（因为也用到了乐山市，这样可以覆盖）
import "antd/dist/antd.less";
import { AppProviders } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

loadServer(() =>
  root.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>
  )
);
