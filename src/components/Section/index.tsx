import React from "react";
import styled from "styled-components";
import GradationText from "../GradationText";

export type Props = {
  title?: string;
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;
const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  display: inline-block;
`;

const Section: React.FC<Props> = (props) => {
  return (
    <Root>
      {props.title && (
        <Title>
          <GradationText>{props.title}</GradationText>
        </Title>
      )}
      {props.children}
    </Root>
  );
};

export default Section;
