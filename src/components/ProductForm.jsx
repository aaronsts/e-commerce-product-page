import { StyledProductForm } from "./styles/ProductForm.styled";

// React Icons
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { StyledButton } from "./styles/Button.styled";

const ProductForm = () => {
  return (
    <StyledProductForm>
      <div>
        <AiOutlineMinus className="icons" />
        3
        <AiOutlinePlus className="icons" />
      </div>
      <StyledButton>
        <AiOutlineShoppingCart />
        Add to Card
      </StyledButton>
    </StyledProductForm>
  );
};

export default ProductForm;
