import styled from "styled-components";

export const Layout = styled.div`

    display: grid;
    place-items: center;
    width: 100%;
    height: auto;

    .box-container {
        z-index: 2;
        height: 70vh;
        width: 50vw;
        color: black;
        backdrop-filter: blur(20px);
        background-color: rgba(255,255,255,0.1);
        box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.205);
        border: 1px solid rgba(255,255,255,0.5);
        border-radius: 2em;
        box-sizing: border-box;
        padding: 2em;
        h1 {
            text-align: center;
            margin-bottom: 1rem;
        }
    }

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