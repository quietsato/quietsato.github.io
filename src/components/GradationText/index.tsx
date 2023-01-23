import React from "react";
import styled from "styled-components";

export type Props = {
  children: React.ReactNode;
};

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

const GradationText: React.FC<Props> = (props) => {
  return <Span>{props.children}</Span>;
};

export default GradationText;
