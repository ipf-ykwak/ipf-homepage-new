import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', sans-serif;
        margin: 0px;
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
