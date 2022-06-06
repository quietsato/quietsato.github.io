import React from "react";
import styled, { css } from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// Types
////////////////////////////////////////////////////////////////////////////////
export type Props = {
  color?: string;
  backgroundColor?: string;
  rainbow?: Rainbow;
};

type Rainbow = {
  saturation: number;
  lightness: number;
};

type PathProps = {
  color?: string;
  rainbow?: Rainbow;
};

////////////////////////////////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////////////////////////////////

const animationDuration = 10;

// FillPath
const AnimatedFillPathCss = css<PathProps>`
  fill: var(--theme-fg);
  animation: rainbow-fill ${animationDuration}s linear;
  animation-iteration-count: infinite;
  @keyframes rainbow-fill {
    ${(props) =>
      [...new Array(11)].map(
        (_, i) =>
          css`
            ${10 * i}% {
              fill: hsl(
                ${36 * i},
                ${props.rainbow?.saturation || 100}%,
                ${props.rainbow?.lightness || 100}%
              );
            }
          `
      )}
  }
`;
const StaticFillPathCss = css<PathProps>`
  fill: ${(props) => props.color || "#000"};
`;
const FillPath = styled.path<PathProps>`
  ${(props) => (props.rainbow ? AnimatedFillPathCss : StaticFillPathCss)};
`;

// StrokePath
const AnimatedStrokePathCss = css<PathProps>`
  stroke: var(--theme-fg);
  animation: rainbow-stroke ${animationDuration}s linear;
  animation-iteration-count: infinite;
  @keyframes rainbow-stroke {
    ${(props) =>
      [...new Array(11)].map(
        (_, i) =>
          css`
            ${10 * i}% {
              stroke: hsl(
                ${36 * i},
                ${props.rainbow?.saturation || 100}%,
                ${props.rainbow?.lightness || 100}%
              );
            }
          `
      )}
  }
`;
const StaticStrokePathCss = css<PathProps>`
  stroke: ${(props) => props.color || "#000"};
`;
const StrokePath = styled.path<PathProps>`
  stroke-width: 10px;
  stroke-linecap: round;
  ${(props) => (props.rainbow ? AnimatedStrokePathCss : StaticStrokePathCss)};
`;

////////////////////////////////////////////////////////////////////////////////
// Exported component
////////////////////////////////////////////////////////////////////////////////
const Avatar: React.FC<Props> = (props) => {
  const backgroundColor = props.backgroundColor || "transparent";

  return (
    <svg viewBox={"0 0 512 512"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={512} height={512} fill={backgroundColor} />
      <StrokePath
        d="M124.211 140.458C124.211 140.458 119.687 98.348 124.211 98C124.211 98 148.92 100.784 155.88 131.757M124.211 140.458C105.65 151.594 85.2332 165.167 85.2332 226.069M124.211 140.458C138.711 131.757 155.88 131.757 155.88 131.757M155.88 131.757H210.486M210.486 131.757C202.845 142.359 198.35 155.28 198.35 155.28M210.486 131.757C213.122 128.1 216.255 124.28 219.915 120.621C234.183 106.352 262.025 103.916 262.025 106.352C262.025 108.788 254.989 131.757 254.989 131.757M254.989 131.757L248.464 155.28M254.989 131.757C312.712 135.943 375.853 125.172 415.088 157.406M415.088 157.406C434.57 173.412 449.14 181.581 452.388 244.514C455.637 307.447 422.114 352.222 368.517 369.295M415.088 157.406C415.088 157.406 420.764 147.604 428.14 139.865C435.516 132.126 449.759 136.253 448.624 147.604C447.489 158.954 437.273 157.406 437.273 157.406C437.273 157.406 428.503 155.343 429.534 147.604C430.566 139.865 433.662 121.807 456 121.807M368.517 369.295L367.485 404.458M368.517 369.295C346.151 376.42 319.099 379.724 287.082 379.773M93.5855 292.888C93.5855 292.888 56 297.934 56 271.659C56 245.385 60.1762 245.21 60.1762 245.21M93.5855 292.888C93.5855 292.888 135.708 301.446 135.708 265.601C135.708 229.755 60.1762 245.21 60.1762 245.21M93.5855 292.888C93.5855 292.888 105.961 324.67 148.572 349.706M60.1762 245.21C60.1762 245.21 72.1826 232.035 85.2332 226.069M85.2332 226.069L96.3819 224.187M286.05 414.203L287.082 379.773M287.082 379.773C276.89 379.788 266.196 379.474 254.989 378.848C221.255 376.963 194.185 370.33 172.585 361.525M171.553 404.458L172.585 361.525M172.585 361.525C163.678 357.895 155.702 353.895 148.572 349.706M147.54 395.41L148.572 349.706"
        {...props}
      />
      <FillPath
        d="M138.576 194.588C138.576 200.987 135.985 206.175 132.788 206.175C129.591 206.175 127 200.987 127 194.588C127 188.188 129.591 183 132.788 183C135.985 183 138.576 188.188 138.576 194.588Z"
        {...props}
      />
      <FillPath
        d="M207 201.412C207 207.812 204.409 213 201.212 213C198.015 213 195.424 207.812 195.424 201.412C195.424 195.013 198.015 189.825 201.212 189.825C204.409 189.825 207 195.013 207 201.412Z"
        {...props}
      />
      <StrokePath
        d="M77.1521 257.161C73.672 266.906 77.1521 279.434 77.1521 279.434M110.562 256.465C107.081 266.21 110.562 278.738 110.562 278.738"
        {...props}
      />
      <StrokePath
        d="M113.722 180.337C121.198 171.762 151.427 171.71 160.008 180.337M185.065 181.729C199.333 175.117 224.51 182.498 233.091 191.125"
        {...props}
      />
    </svg>
  );
};

export default Avatar;
