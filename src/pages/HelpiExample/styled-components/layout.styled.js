import styled from "styled-components";
import { motion } from "framer-motion";

export const Layout = styled(motion.div) `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    position: relative;

    .how-it-works-text {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        inset: 0;
        z-index: -1;
        font-size: 30vw;
    }
    span {
        font-weight: bold;
        margin: 0;
        padding: 0;
        color: rgba(200, 200, 200, 0.6);
    }

`