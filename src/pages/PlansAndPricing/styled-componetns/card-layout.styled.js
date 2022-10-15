import styled from "styled-components";
import { motion } from "framer-motion";

export const CardLayout = styled(motion.div)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${props => props.title === 'Bussines' ? '25rem' : '20rem'};
    width: 100%;
    border: 1px solid gray;
    border-radius: 1rem;
    box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.205);

`
