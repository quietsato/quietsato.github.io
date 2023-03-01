import React, { useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import { Transition, TransitionStatus } from "react-transition-group";
import Avatar from "../Avatar";

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
`;

const AvatarContainer = styled.div<{
  enableTransition?: boolean;
  shrink?: boolean;
}>`
  position: absolute;
  width: 50vw;
  height: 50vw;
  left: 50%;

  ${(props) =>
    props.enableTransition &&
    css`
      transition: all 0.3s ease-out;
    `}

  ${(props) =>
    props.shrink
      ? css`
          left: -0.5rem;
          top: -0.5rem;
          width: 5rem;
          height: 5rem;
          transform: translateX(-1rem), translateY(-1rem);
        `
      : css`
          transform: translateX(-50%) translateY(4rem);
        `}
`;

const Text = styled.div<{
  enableTransition?: boolean;
  shrink?: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1vw;

  font-size: max(4rem, 4vw);
  height: 8vw;
  color: #839496;

  left: 50%;
  transform: translateX(-50%);

  ${(props) =>
    props.enableTransition &&
    css`
      transition: all 0.3s ease-out;
    `}

  ${(props) =>
    props.shrink &&
    css`
      animation: ${fadeOut} 0.1s both, ${fadeIn} 0.2s both;
      animation-delay: 0s, 0.2s;
      left: 5rem;
      transform: none;
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
  shrink?: boolean;
};

const Hero: React.FC<Props> = (props) => {
  const animatedCharacters = Array.from("quietsato").map((c, i) => ({
    key: i,
    character: c,
    enterDelayMs: i * 50,
  }));

  function enableTransition(status: TransitionStatus): boolean {
    return ["entering", "exiting"].findIndex((s) => s == status) !== undefined;
  }

  const shrinkTransitionRef = useRef(null);
  return (
    <Transition nodeRef={shrinkTransitionRef} in={!!props.shrink} timeout={1000}>
      {(shrinkStatus) => (
        <Container ref={shrinkTransitionRef}>
          <Text enableTransition={enableTransition(shrinkStatus)} shrink={props.shrink}>
            <span>I'm</span>
            <AnimatedCharacters>
              {animatedCharacters.map(({ key, character, enterDelayMs }) => (
                <AnimatedCharacter key={key} delayMs={enterDelayMs}>
                  {character}
                </AnimatedCharacter>
              ))}
            </AnimatedCharacters>
          </Text>
          <AvatarContainer enableTransition={enableTransition(shrinkStatus)} shrink={props.shrink}>
            <Avatar rainbow={{ lightness: 50, saturation: 50 }} />
          </AvatarContainer>
        </Container>
      )}
    </Transition>
  );
};

export default Hero;
