import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
 
    background-color: ${props => props.primary ? '#012a4a' : ''};
    padding: 1rem 2.5rem;
    color:  ${props => props.primary ? '#03F1E0' : ''};
    font-size: 1em;
    font-weight: bold;
    margin-top: 10px;
    width: fit-content;
    position: relative;
    cursor: pointer;
    border: unset;
    border-radius: 2rem;
    z-index: 1;
    font-weight: 600;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
    transition: all 250ms;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 2rem;
        background-color: #03F1E0;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms
    }
    &:hover {
        color: #012a4a;
    }
    &:hover::before {
        width: 100%;
    }

    @keyframes pulse {
        to {
            transform: scale(1.3);
            opacity: 0;
        }
    }

`