import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased !important;
    padding: 1rem;
  }

  html, body, #root {
    min-height: 100%;
  }

  body, input, p, a, button {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-family: ${(props) => props.theme.fonts};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;
