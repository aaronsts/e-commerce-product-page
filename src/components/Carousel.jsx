import { StyledCarousel } from "./styles/Carousel.styled";

// Icons
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Carousel = () => {
  return (
    <StyledCarousel>
      <div className="arrow-left">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <img src="./images/image-product-1-thumbnail.jpg" alt="" />
      <div className="arrow-right">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
