import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle, { WithFonts } from "../styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithFonts>
      <GlobalStyle />
      <Component {...pageProps} />
    </WithFonts>
  );
}
