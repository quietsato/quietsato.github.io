import React from "react";
import styled from "styled-components";

import { VscLink } from "react-icons/vsc";

////////////////////////////////////////////////////////////////////////////////
// Props
////////////////////////////////////////////////////////////////////////////////
export type Props = {
  text: string;
  url: string;
};

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////
const Link = styled.a`
  width: fit-content;
`;

const Wrapper = styled.div`
  min-height: 2em;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 1em;
  border-radius: 1em;
  border: 0.1em solid var(--theme-fg);

  :hover {
    color: var(--theme-blue);
    border-color: var(--theme-blue);
  }
`;

const LinkIcon = styled.div`
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
`;

const LinkText = styled.span``;

////////////////////////////////////////////////////////////////////////////////
// Exported component
////////////////////////////////////////////////////////////////////////////////
const LinkChip: React.FC<Props> = (props) => {
  return (
    <Link href={props.url} target="_blank" rel="noreferrer noopener">
      <Wrapper>
        <LinkIcon>
          <VscLink />
        </LinkIcon>
        <LinkText>{props.text}</LinkText>
      </Wrapper>
    </Link>
  );
};

export default LinkChip;
