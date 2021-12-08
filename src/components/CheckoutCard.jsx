import { StyledButton } from "./styles/Button.styled";
import { StyledCheckout } from "./styles/CheckoutCard.styled";

import { BsFillTrashFill } from "react-icons/bs";

const CheckoutCard = () => {
  return (
    <StyledCheckout>
      <h2>Cart</h2>
      <hr />
      <div className="summary">
        <img src="./images/image-product-1-thumbnail.jpg" alt="" />
        <div>
          <p>Autumn Limited Edition...</p>
          <p className="price">
            $125.00 x 3 <span>$375.00</span>
          </p>
        </div>
        <BsFillTrashFill />
      </div>
      <StyledButton>Checkout</StyledButton>
    </StyledCheckout>
  );
};

export default CheckoutCard;
