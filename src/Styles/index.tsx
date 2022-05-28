import { createGlobalStyle } from "styled-components";

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

@media screen and (prefers-color-scheme: dark) {
  body {
    --theme-black: #282c34;
    --theme-red: #e06c75;
    --theme-green: #98c379;
    --theme-yellow: #e5c07b;
    --theme-blue: #61afef;
    --theme-magenta: #c678dd;
    --theme-cyan: #56b6c2;
    --theme-white: #dcdfe4;
    --theme-fg: var(--theme-white);
    --theme-bg: var(--theme-black);
  }
}
`;

export default GlobalStyles;
