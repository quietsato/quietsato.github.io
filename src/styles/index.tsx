import React from "react";
import { createGlobalStyle } from "styled-components";

import { Recursive } from "@next/font/google";

const recursive = Recursive({
  weight: "variable",
  subsets: ["latin"],
});

export const WithFonts: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={recursive.className}>{children}</div>
);

const GlobalStyles = createGlobalStyle`
body {
  --theme-black: #383a42;
  --theme-red: #e45649;
  --theme-green: #50a14f;
  --theme-yellow: #c18401;
  --theme-blue: #0184bc;
  --theme-magenta: #a626a4;
  --theme-cyan: #0997b3;
  --theme-white: #fafafa;
  --theme-fg: var(--theme-black);
  --theme-bg: var(--theme-white);

  color: var(--theme-fg);
  background-color: var(--theme-bg);
  font-family: Arial, Helvetica, sans-serif;
}

:link,
:visited {
  color: var(--theme-fg);
  text-decoration: none;
  @media (hover: hover) {
    :hover {
      * {
        color: var(--theme-blue);
        border-color: var(--theme-blue);
      }
    }
  }
  @media (hover: none) {
    :active {
      * {
        color: var(--theme-blue);
        border-color: var(--theme-blue);
      }
    }
  }
}

@media screen and (prefers-color-scheme: dark) {
  body {
    --theme-black: #282c34;
    --theme-red: #e06c75;
    --theme-green: #98c379;
    --theme-yellow: #e5c07b;
    --theme-blue: #61afef;
    --theme-magenta: #c678dd;
    --theme-cyan: #56b6c2;
    --theme-white: #acacb4; // #dcdfe4; more darker than original
    --theme-fg: var(--theme-white);
    --theme-bg: var(--theme-black);
  }
}
`;

export default GlobalStyles;
