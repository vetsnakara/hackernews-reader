import { createGlobalStyle } from "styled-components";
import { mobile } from "./mediaQueries";

const GlobalStyles = createGlobalStyle`
  #root {
    position: relative;
    height: 100%;
    padding-top: 80px;

    ${mobile} {
      padding-top: 60px;
    }
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
    background-color: ${({ theme }) => theme.background};
    min-width: 320px;
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
