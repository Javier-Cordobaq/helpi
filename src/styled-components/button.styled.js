import styled from "styled-components";

export const Button = styled.button`
 
    background-color: ${props => props.primary ? '#114FA8' : ''};
    border: none;
    padding: 1rem 2.5rem;
    border-radius: 3rem;
    color:  ${props => props.primary ? 'white' : '#03F1E0'};
    font-size: 1rem;
    font-weight: bold;
    margin-top: 10px;
    width: fit-content;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 3rem;
        animation: pulse 1s infinite;
        background-color: #114FA8;
        z-index: -1;
    }
    @keyframes pulse {
        to {
            transform: scale(1.3);
            opacity: 0;
        }
    }

    @media (min-width: 768px){

    }
    @media (min-width: 1280px){
   
    }
    @media (min-width: 1536px){
      
    }

`