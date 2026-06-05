import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
  }
  body{
    height: 100vh;
    width: 100vw;
  }
  button {
    cursor: pointer;
  }
`;

export default globalStyles;
