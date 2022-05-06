import React from "react";
import styled from "styled-components";

export type Props = {
    text: string;
};

const Root = styled.div`
    background-color: yellow;
`;

const Block: React.FC<Props> = (props: Props) => {
    return (
        <>
            <Root>{props.text}</Root>
        </>
    );
};

export default Block;
