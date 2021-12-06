// Styled Components
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";

// Components
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  const theme = {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      darkBlue: "hsl(220, 13%, 13%)",
      darkGrayBlue: "hsl(219, 9%, 45%)",
      grayBlue: "hsl(220, 14%, 75%)",
      lightGrayBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0,0%,100%)",
      black: "hsl(0, 0%, 0%)",
    },
    dimensions: {
      mobile: "375px",
      desktop: "1440px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Carousel />
    </ThemeProvider>
  );
}

export default App;
