import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDudYouRender = require("@welldone-software/why-did-you-render");
  whyDudYouRender(React, { trackAllPureComponents: false });
}
