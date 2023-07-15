import React from "react";
import styled from "styled-components";

const Span = styled.span`
  @keyframes animated-gradient-text {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  display: inline-block;
  background: linear-gradient(
    to right,
    var(--theme-yellow) 20%,
    var(--theme-red) 40%,
    var(--theme-cyan) 60%,
    var(--theme-yellow) 80%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: animated-gradient-text 5s linear infinite;
`;


export default function GradationText({ children } : { children: React.ReactNode }) {
  return <Span>{children}</Span>;
}
