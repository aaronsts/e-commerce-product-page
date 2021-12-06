import React from "react";
import ProductForm from "./ProductForm";

import { StyledProductInfo } from "./styles/ProductInfo.styled";

const ProductInfo = () => {
  return (
    <StyledProductInfo>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <div>
          <h3>$125.00</h3>
          <span>50%</span>
        </div>
        <p>$250.00</p>
      </div>
      <ProductForm />
    </StyledProductInfo>
  );
};

export default ProductInfo;
