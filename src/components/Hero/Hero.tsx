import React from "react";
import styled, { css, keyframes } from "styled-components";
import Avatar from "../Avatar";

// TODO: Install `react-transition-group`

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;
const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  /* background-color: #fdf6e3; */
`;

const AvatarContainer = styled.div<{
  shrink: boolean;
}>`
  position: absolute;
  width: 50vw;
  height: 50vw;
  left: 50%;
  transform: translateX(-50%) translateY(4rem);

  transition: all 0.3s ease-out;

  ${(props) =>
    props.shrink &&
    css`
      left: 0;
      width: 8vw;
      height: 8vw;
      transform: translateY(0);
    `}
`;

const Text = styled.div<{
  shrink: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1vw;

  font-size: max(4rem, 4vw);
  height: 8vw;
  color: #839496;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-out;

  ${(props) =>
    props.shrink &&
    css`
      left: 0;
      transform: translateX(10vw);
      animation: ${fadeOut} 0.1s both, ${fadeIn} 0.5s both;
      animation-delay: 0ms, 0.3s;
    `}
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
      <Text shrink={props.shrink}>
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
