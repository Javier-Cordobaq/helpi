import styled from "styled-components";
import { PaleteColors } from "./palete-colors";

export const LayoutNav = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: ${props => props.scroll === 'false' ? '7rem' : '5rem'};
    background-color: ${props => props.scroll === 'false' ? '' : PaleteColors.BACKGROUN_COLOR};
    box-sizing: border-box;
    padding: 0 3rem;
    transition: 0.4s all;
    z-index: 100;

    .iconLogo {
        width: 3.5rem;
    }
    .letterLogo {
        display: none;
    }
    .logo_container {
        display: flex;
        align-items: center;
    }

    .menu_container {
        display: grid;
        place-items: center;
        list-style: none;
        padding: 0;
        position: relative;
        height: 3rem;
        width: 3rem;
        cursor: pointer;
    }
    .translate-menu {
        width: 9rem;
        top: 3rem;
        right: 0;
        position: absolute;
        display: none;
        background-color: #012a4a;
        border-radius: 1rem;
        box-sizing: border-box;
        padding: 1rem;
        transition: 0.2s all;
        opacity: 0;
        p {
            color: #03F1E0;
        }
    }
    .menu_container:hover .translate-menu {
        display: block;
        opacity: 100%;
    }
    .logo {
        font-size: 1.5rem;
        font-weight: bold;
    }

    @media (min-width: 768px){

    }
    @media (min-width: 1280px){
        padding: 0 8%;
        .iconLogo {
            display: none;
        }
        .letterLogo {
            transition: 0.3s all ;
            display: block;
            width: ${props => props.scroll === 'false' ? '9rem' : '7rem'};
        }
    }
    @media (min-width: 1536px){
      
    }

`