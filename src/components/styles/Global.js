import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Kumbh+Sans:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    min-height: 100vh;
    padding-bottom: 60px;
  }
`;
