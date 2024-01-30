import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

const spinAnimation =  keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(359deg);
    }
`

export const Spinner = styled.div`
    margin-right: 10px;
    animation: ${spinAnimation} 2s infinite linear;
`
export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;