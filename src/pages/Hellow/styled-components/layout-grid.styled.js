import styled from "styled-components";

export const LayoutGrid = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    .wave {
        position: absolute;
        top: 2rem;
        width: 100%;
    }

    .row {
        min-height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .cont_text {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        padding: 2rem;
    }
    
    .cont_image {
        display: grid;
        place-items: center;
        height: 100%;
        width: 100%;
        position: relative;
    }

/*     .bot {
    position: relative;
    height: 100%;
    max-width: 100%;
    z-index: 1;
   }

   .bot_hand {
    z-index: 0;
    position: absolute;
    top: 28%;
    right: 6%;
    width: 12rem;
    animation: hand_move 2s linear infinite alternate-reverse;
    @keyframes hand_move {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 20deg;
        }
    }
   } */

    h1, button {
        z-index: 1;
    }
    
    h1 {
        font-size: 4rem;
        margin: 0;
        padding: 0;
    }

    .gradiente_text {
        background: #002533;
        background: linear-gradient(83deg, #114FA8 0%, #03F1E0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 0 transparent;
        font-size: 4rem;
    }


    @media (min-width: 768px){
        max-width: 768px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1280px){
        max-width: 1280px;
    }
    @media (min-width: 1536px){
        max-width: 1536px;
    }

`