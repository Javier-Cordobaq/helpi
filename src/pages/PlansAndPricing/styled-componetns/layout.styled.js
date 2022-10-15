import styled from "styled-components";
import { motion } from "framer-motion";

export const Layout = styled(motion.div)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;

    .plans-container {
        box-sizing: border-box;
        padding: 1rem;
        display: grid;
        place-items: center;
        gap: 2rem;
        grid-auto-flow: dense;
        grid-auto-rows: auto;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
        width: 100%;
        height: 100%; 
    }

`