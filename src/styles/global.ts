import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --red: #e52e4d;
        --green: #33cc95;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor:pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
