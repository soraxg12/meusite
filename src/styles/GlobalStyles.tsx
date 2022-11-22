import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        color-scheme: light dark;
        color: #213547;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    
    a {
        font-weight: 500;
        text-decoration: inherit;
    }

    body {
        padding:0;
        margin:0;
        box-sizing:border-box;
        background:rgb(235 235 235);;
    }
`