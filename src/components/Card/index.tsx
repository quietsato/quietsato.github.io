import React from "react";
import styled from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// Props
////////////////////////////////////////////////////////////////////////////////
export type Props = {
  children: React.ReactNode;
};

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////
const Root = styled.div`
  padding: 1em;

  display: flex;
  flex-direction: column;
  gap: 0.25em;

  /* Neon effect */
  border: 1px solid var(--theme-white);
  /* prettier-ignore */
  box-shadow: 
    0 0 0.1em var(--theme-white),
    0 0 0.1em var(--theme-white),
    0 0 0.2em var(--theme-blue),
    0 0 0.2em var(--theme-blue),
    0 0 0.2em var(--theme-blue),
    inset 0 0 0.2rem var(--theme-blue);
`;

////////////////////////////////////////////////////////////////////////////////
// Exported component
////////////////////////////////////////////////////////////////////////////////
const Card: React.FC<Props> = (props) => {
  return <Root>{props.children}</Root>;
};

export default Card;