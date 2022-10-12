import styled from "styled-components";

export const Layout = styled.div`

    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;

    @media (min-width: 768px){
        max-width: 768px;
        overflow: hidden;
    }
    @media (min-width: 1280px){
        max-width: 1280px;
    }
    @media (min-width: 1536px){
        max-width: 1536px;
    }

`