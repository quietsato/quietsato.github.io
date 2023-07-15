import React from "react";
import styled from "styled-components";

const Span = styled.span`
  display: inline-block;
  background: linear-gradient(
    180deg,
    var(--theme-yellow) 0%,
    var(--theme-blue) 20%,
    var(--theme-green) 100%
  );
  background: -webkit-linear-gradient(
    -90deg,
    var(--theme-yellow) 0%,
    var(--theme-blue) 20%,
    var(--theme-green) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function GradationText({ children } : { children: React.ReactNode }) {
  return <Span>{children}</Span>;
}
