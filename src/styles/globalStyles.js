import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
