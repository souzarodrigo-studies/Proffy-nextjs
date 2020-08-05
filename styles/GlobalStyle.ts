import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 60%;

        ${(props) => {
            const theme = props.theme;
            let append = '';
            Object.entries(theme).forEach(([prop, value]) => {
                append += `--${prop}: ${value};`;
            });
            return append;
        }}
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        background: var(--primary);
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
        color: var(--black);
        transition: color .2s ease-out;
    }
    ul {
        list-style: none;
    }

    body,
    input,
    button,
    textarea {
        font: 500 1.6rem Poppins;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
`;
