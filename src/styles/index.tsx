import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  --theme-black: #4d4d4c;
  --theme-red: #c82829;
  --theme-green: #718c00;
  --theme-yellow: #eab700;
  --theme-blue: #4271ae;
  --theme-magenta: #8959a8;
  --theme-cyan: #3e999f;
  --theme-white: #ffffff;
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
    --theme-black: #1d1f21;
    --theme-red: #cc6666;
    --theme-green: #b5bd68;
    --theme-yellow: #f0c674;
    --theme-blue: #81a2be;
    --theme-magenta: #b294bb;
    --theme-cyan: #8abeb7;
    --theme-white: #c5c8c6;
    --theme-fg: var(--theme-white);
    --theme-bg: var(--theme-black);
  }
}
`;

export default GlobalStyles;
