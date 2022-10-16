import styled from "styled-components";
import { PaleteColors, TextColors } from "./palete-colors";

export const Layout = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${PaleteColors.BACKGROUN_COLOR};

    h1 {
    color: ${TextColors.PRIMARY};
    font-weight: bold;
    }

    h2, h3 {
    font-family: 'PT Sans', sans-serif;
    color: ${TextColors.SECONDARY};
    }

    p {
    font-family: 'Kanit', sans-serif;
    color: ${TextColors.SECONDARY};
    }

    a {
    text-decoration: none;
    color: ${TextColors.SECONDARY};
    }

`