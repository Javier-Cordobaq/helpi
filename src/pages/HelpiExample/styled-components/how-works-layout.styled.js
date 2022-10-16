import styled from "styled-components";
import { motion } from "framer-motion";

export const HowWorksLayout = styled(motion.div)`

    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    place-items: flex-start;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 1rem;

    h1 {
        text-transform: uppercase;
        font-size: calc(1.5em + 1vw);
    }
    p {
        font-size: calc(0.4em + 1vw);
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