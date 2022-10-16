import styled from "styled-components";
import { motion } from "framer-motion";

export const CardLayout = styled(motion.div)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${props => props.title === 'Bussines' ? '25rem' : '20rem'};
    border: ${props => props.title === 'Bussines' ? '5px solid #01497c' : ''};
    width: 100%;

    -webkit-border-radius: 44px;
    border-radius: 44px;
    background: #cee5ff;
    -webkit-box-shadow: 22px 22px 30px #c0d5ed, -22px -22px 30px #dcf5ff;
    box-shadow: 22px 22px 30px #c0d5ed, -22px -22px 30px #dcf5ff;

`
