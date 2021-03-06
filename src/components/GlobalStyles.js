import { createGlobalStyle } from "styled-components";
import img from "../images/london1.jpg";

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  min-height: 100vh;
  background-image: url(${img});
  background-color: #666;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  line-height: 1.5;
  color: #fff;
  
  
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

main {
  width: 90vw;
  margin: 0 auto
}
`;

export default GlobalStyle;
