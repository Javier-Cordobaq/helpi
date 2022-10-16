import styled from "styled-components";
import { motion } from "framer-motion";
import telegram from '../../../assets/telegram.webp'

export const MobileLayout = styled(motion.div)`

    height: 20rem;
    width: 100vw;
    background-color:  #212121;
    border: 10px solid black;
    outline: 10px solid gray;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.205);
    position: relative;
    z-index: 2;
    box-sizing: border-box;

    p {
        color: white;
    }

    .content-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .chat-header-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #212121;
        width: 100%;
        height: 5rem;
        box-sizing: border-box;
        padding: 0 1em;
        color: white;
        .menu-container {
            box-sizing: border-box;
            padding: 10px 0;
            display: flex;
            gap: 10px;
            align-items: center;
            width: 100%;
        }
        .mobile-info {
            display: flex;
            justify-content: space-between;
            width: 100%;
            font-size: 0.7em;
            position: relative;
            box-sizing: border-box;
            padding: 5px 5px;
            span {
                position: absolute;
                left: 5.5rem;
                top: 0;
                z-index: 1;
                background-color: black;
                height: 1.2rem;
                width: 6rem;
                margin: 0 auto;
                border-radius: 0 0 5px 5px;
            }
            p {
                z-index: 2;
            }
        }
    }
    .name-container {
        margin-right: auto;
        color: white;
        p {
            &:first-child {
                font-size: 1.1em;
                font-weight: bold;
            }
            &:last-child {
                font-size: 0.8em;
                color: gray;
            }
        }
    }
    .profile-picture {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.3rem;
        width: 2.3rem;
        background: rgb(150,150,150);
        background: linear-gradient(60deg, rgba(150,150,150,1) 0%, rgba(61,61,61,1) 100%);
        border-radius: 50%;
        img {
            object-fit: contain;
            width: 80%;
            height: 80%;
        }
    }
    .messages-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-image: url(${telegram});
        background-size: cover;
        color: white;
        box-sizing: border-box;
        p {
            max-width: 15rem;
            box-sizing: border-box;
            padding: 5px;
            background-color: #212121;
            margin: 5px;
        }
        .bot-message {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            box-sizing: border-box;
            p {
                border-radius: 1rem 1rem 1rem 0;
            }
            button {
                max-width: 15rem;
                box-sizing: border-box;
                padding: 5px;
                background-color: #212121;
                margin-left: 5px;
                border-radius: 1rem;
                color: white;
                border: none;
            }
        }
        .client-message {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            box-sizing: border-box;
            p {
                border-radius: 1rem 1rem 0 1rem;
            }
        }
    }
    .input-container {
        display: flex;
        gap: 10px;
        align-items: center;
        background-color: #212121;
        width: 100%;
        height: 3.5rem;
        box-sizing: border-box;
        padding: 0 1em;
    }
    .button-start {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(28, 27, 23, 0.5);
        button {
            border: none;
            background-color: #212121;
            color: white;
            border-radius: 2rem;
            box-sizing: border-box;
            padding: 1rem 2rem;
            animation: shake 2s infinite;
        }
    }



    @keyframes shake {
        10% {
            transform: scale(1.05) rotate(5deg);
        }
        20% {
            transform: scale(1.05) rotate(-5deg);
        }
        30% {
            transform: scale(1.05) rotate(5deg);
        }
        40% {
            transform: none;
        }
    }

    @media (min-width: 768px){
        max-width: 768px;
    }
    @media (min-width: 1280px){
        height: 33rem;
        width: 18rem;
    }
    @media (min-width: 1536px){
        max-width: 1536px;
    }

`