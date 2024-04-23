import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after  {
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

  a{
    color: inherit;
    text-decoration: none;
  }

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

input,
select,
textarea {
  border: none;
  outline: none;
}

::placeholder {
  color: rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
  color: inherit;
}
`;
