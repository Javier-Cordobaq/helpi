import styled from "styled-components";

export const LayoutNav = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 7rem;
    background-color: ${props => props.scroll === 'false' ? '' : 'white'};
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
        display: flex;
        gap: 15px;
        list-style: none;
        padding: 0;
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
            display: block;
            width: 9rem;
        }
    }
    @media (min-width: 1536px){
      
    }

`