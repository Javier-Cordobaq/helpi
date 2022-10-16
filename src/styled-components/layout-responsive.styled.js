import styled from "styled-components";

export const LayoutResponsive = styled.div`

    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    
    @media (min-width: 768px){
        max-width: 768px;
    }
    @media (min-width: 1280px){
        max-width: 1280px;
        overflow: visible;
    }
    @media (min-width: 1536px){
        max-width: 1536px;
    }

`