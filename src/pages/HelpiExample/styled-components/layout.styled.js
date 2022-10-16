import styled from "styled-components";
import { motion } from "framer-motion";

export const Layout = styled(motion.div)`

    display: grid;
    grid-auto-flow: dense;
    grid-auto-rows: fit-content;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 30rem), 1fr));
    gap: 1rem;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    position: relative;

    .text-container {
        display: flex;
        text-align: left;
        flex-direction: column;
        justify-content: center;
        place-items: flex-start;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1rem;
    }
    .mobile-cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        place-items: center;
        width: 100%;
        height: 100%;
    }
    .bubble {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 300px;
        height: 300px;
        background-color: #212121;
        border-radius: 58% 42% 60% 40% / 27% 52% 48% 73%;
        background: linear-gradient(to bottom, rgba(171, 184, 195, 1) 0%,  rgba(142, 209, 252, 1) 100%);
        overflow: visible;
    }

    @media (min-width: 768px){
    }
    @media (min-width: 1280px){
        .bubble {
            width: 700px;
            height: 700px;
            overflow: hidden;
        }
    }
    @media (min-width: 1536px){
    }

`