import React from "react";
import styled from "styled-components";
import GradationText from "../GradationText";

export type Props = {
  title?: string;
  children: React.ReactNode;
};

const Root = styled.section`
  width: 100%;
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
const ContentWrapper = styled.div`
  width: 100%;
`;

const Section: React.FC<Props> = (props) => {
  return (
    <Root>
      {props.title && (
        <Title>
          <GradationText>{props.title}</GradationText>
        </Title>
      )}
      <ContentWrapper>{props.children}</ContentWrapper>
    </Root>
  );
};

export default Section;
