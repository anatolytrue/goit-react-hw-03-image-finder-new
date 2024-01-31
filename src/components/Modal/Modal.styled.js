import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`

export const ModalWindow = styled.div`
    max-width: calc(80vw - 48px);
    max-height: calc(80vh - 24px);
    position: relative;
`

export const ModalBtn = styled.div`
    position: absolute;
    height: 40px; 
    width: 40px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px transparent #616161;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: all 150ms;

        &:hover,
        &:focus {
            transform: rotateZ(90deg);
            background: #616161;
            color: #fff
    }
`;
