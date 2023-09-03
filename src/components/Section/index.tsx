import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import GradationText from "../GradationText";

type Props = {
  title?: string;
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

export default function Section({ children, ...props }: PropsWithChildren<Props>) {
  return (
    <Root>
      {props.title && (
        <Title>
          <GradationText>{props.title}</GradationText>
        </Title>
      )}
      <ContentWrapper>{children}</ContentWrapper>
    </Root>
  );
}
