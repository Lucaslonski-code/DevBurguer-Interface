import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    font-weight: 500;
    font-family: "Playfair Display", serif;
  }
  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyles;
