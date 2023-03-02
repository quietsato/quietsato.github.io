import React from "react";
import { createGlobalStyle } from "styled-components";

import { Recursive, Zen_Kaku_Gothic_New } from "@next/font/google";

const recursive = Recursive({
  weight: "variable",
  subsets: ["latin"],
  display: "block",
  axes: ["CASL"]
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: "400",
  subsets: ["cyrillic"],
  display: "block",
});

export const WithFonts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={[recursive.className, zenKakuGothicNew].join(" ")}>{children}</div>;
};

const GlobalStyles = createGlobalStyle`
body {
  --theme-black: #3c3836;
  --theme-red: #cc241d;
  --theme-green: #98971a;
  --theme-yellow: #d79921;
  --theme-blue: #458588;
  --theme-magenta: #b16286;
  --theme-cyan: #689d6a;
  --theme-white: #fbf1c7;
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
    --theme-black: #282828;
    --theme-red: #fb4934;
    --theme-green: #b8bb26;
    --theme-yellow: #fabd2f;
    --theme-blue: #83a598;
    --theme-magenta: #d3869d;
    --theme-cyan: #8ec07c;
    --theme-white: #ebdbb2;
    --theme-fg: var(--theme-white);
    --theme-bg: var(--theme-black);
  }
}
`;

export default GlobalStyles;
