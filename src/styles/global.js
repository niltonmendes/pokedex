import { createGlobalStyle } from "styled-components";
import Background from '../assets/bg.png';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 97.5%large;
    }

    html, body {
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: var(--white);
        background: url(${Background});
    }

    #root {
        max-width: 1080px;
        margin: 0 auto;
        padding: 2.5rem 1.25rem;
    }

    button {
        cursor: pointer;
    }
`

export default GlobalStyles;