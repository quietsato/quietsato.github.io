import "modern-css-reset";
import GlobalStyle, { WithFonts } from "../src/styles";

export const decorators = [
  (Story) => (
    <WithFonts>
      <GlobalStyle />
      <Story />
    </WithFonts>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
