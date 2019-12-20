import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #root {
    position: relative;
    height: 100%;
    padding-top: 80px;
  }

  html {
    box-sizing: border-box
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html, body {
    font-family: Lato, Helvetica-Neue, Helvetica, Arial, sans-serif;
    width: 100vw;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.background}
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`;

export default GlobalStyles;
