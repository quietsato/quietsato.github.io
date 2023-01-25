import React from "react";
import styled, { css } from "styled-components";
import Avatar from "../Avatar";

const Container = styled.div<{
  shrink: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  gap: 2rem;
  /* background-color: #fdf6e3; */

  ${(props) =>
    props.shrink &&
    css`
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;
      animation: fade-in 0.3s ease-in-out;
    `}
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const AvatarContainer = styled.div<{
  shrink: boolean;
}>`
  width: 75%;
  height: 75%;

  ${(props) =>
    props.shrink &&
    css`
      width: 100%;
      height: 100%;
    `}
`;

const Text = styled.div`
  display: flex;
  gap: 1vw;
  font-size: max(4rem, 4vw);
  flex-direction: row;
  color: #839496;
`;

const AnimatedCharacters = styled.span`
  display: flex;
  flex-direction: row;
`;
type AnimatedCharacterProps = {
  delayMs: number;
};
const AnimatedCharacter = styled.span<AnimatedCharacterProps>`
  @keyframes slide-in {
    0% {
      transform: translateX(20vw);
      font-weight: 100;
    }
    50% {
    }
    100% {
      transform: translateX(0) translateY(0);
      font-weight: 900;
      opacity: 1;
    }
  }
  opacity: 0;
  transition: opacity 1s;
  animation: slide-in 1s forwards;
  animation-delay: ${(props) => `${props.delayMs}ms`};
`;

export type Props = {
  shrink: boolean;
};

const Hero: React.FC<Props> = (props) => {
  const animatedCharacters = Array.from("quietsato").map((c, i) => ({
    key: i,
    character: c,
    enterDelayMs: i * 50,
  }));

  return (
    <Container shrink={props.shrink}>
      <Text>
        <span>I'm</span>
        <AnimatedCharacters>
          {animatedCharacters.map(({ key, character, enterDelayMs }) => (
            <AnimatedCharacter key={key} delayMs={enterDelayMs}>
              {character}
            </AnimatedCharacter>
          ))}
        </AnimatedCharacters>
      </Text>
      <AvatarContainer shrink={props.shrink}>
        <Avatar rainbow={{ lightness: 50, saturation: 50 }} />
      </AvatarContainer>
    </Container>
  );
};

export default Hero;
