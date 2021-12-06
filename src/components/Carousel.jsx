import React from "react";

import { StyledCarousel } from "./styles/Carousel.styled";

import Carousel, { arrowsPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <StyledCarousel>
        <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <div className="arrow-left">
                    <svg
                      width="12"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1 3 9l8 8"
                        stroke="#1D2026"
                        stroke-width="3"
                        fill="none"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                ),
                arrowRight: (
                  <div className="arrow-right">
                    <svg
                      width="13"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2 1 8 8-8 8"
                        stroke="#1D2026"
                        stroke-width="3"
                        fill="none"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                ),
                addArrowClickHandler: true,
              },
            },
            "infinite",
          ]}
        >
          <img src={"./images/image-product-1.jpg"} alt="shoe 1" />
          <img src={"./images/image-product-2.jpg"} alt="shoe 2" />
          <img src={"./images/image-product-3.jpg"} alt="shoe 3" />
          <img src={"./images/image-product-4.jpg"} alt="shoe 4" />
        </Carousel>
      </StyledCarousel>
    );
  }
}

export default MyCarousel;
