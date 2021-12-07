// Styled Components
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";

// Components
import Navbar from "./components/Navbar";
import MyCarousel from "./components/Carousel";
import ProductInfo from "./components/ProductInfo";
import Menu from "./components/Menu";

// React
import { useState } from "react";

function App() {
  const theme = {
    colors: {
      orange: "hsl(26, 100%, 55%)",
      orangeFaded: "hsla(26, 100%, 55%, 0.4)",
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

  const [showNav, setShowNav] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Menu showNav={showNav} setShowNav={setShowNav} />
      <Navbar setShowNav={setShowNav} />
      <div>
        <MyCarousel />
        <ProductInfo />
      </div>
    </ThemeProvider>
  );
}

export default App;
