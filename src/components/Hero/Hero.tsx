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

const Container = styled.div<{
  shrink?: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--theme-bg);

  ${props => props.shrink && css`
  /* display: block; */
  /* position: relative; */
  flex-direction: row-reverse;
  justify-content: center;
  gap: 1rem;
  height: 6rem;
  `}
`;

const AvatarContainer = styled.div<{
  enableTransition?: boolean;
  shrink?: boolean;
}>`
  width: min(60%, 36rem);
  margin: auto;

  ${(props) =>
    props.enableTransition &&
    css`
      transition: transform 0.3s ease-out;
    `}

  ${(props) =>
    props.shrink
    && css`
          margin: .5rem 0 0;
          transform: scale(0.5) scale(calc(2));
          transition-delay: 0s, 0.3s;
          width: 5rem;
          height: 5rem;
        `
  }
`;

const Text = styled.div<{
  enableTransition?: boolean;
  shrink?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  font-size: min(4rem, 10vw);
  height: 4rem;
  color: var(--theme-fg);


  ${(props) =>
    props.enableTransition &&
    css`
      /* transition: transform 0.3s ease; */
    `}
  
  ${(props) => props.shrink ? css`
  animation: ${fadeOut} 0.3s, ${fadeIn} 0.2s;
  animation-delay: 0s, 0.3s;
  ` : css`
  animation: ${fadeOut} 0.2s, ${fadeIn} 0.3s;
  animation-delay: 0s, 0.2s;
  `}

`;

const AnimatedCharacters = styled.span`
  display: flex;
  flex-direction: row;
  gap: .1rem;
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
        <Container ref={shrinkTransitionRef} shrink={props.shrink}>
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
