import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::before,::after{
  padding: 0;
  box-sizing:border-box;
  margin: 0;
}
  body {
   font-family: 'Shojumaru', cursive;
  }
`;

export default GlobalStyle;
