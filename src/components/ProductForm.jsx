import { StyledProductForm } from "./styles/ProductForm.styled";

// React Icons
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductForm = () => {
  return (
    <StyledProductForm>
      <div>
        <AiOutlineMinus className="icons" />
        3
        <AiOutlinePlus className="icons" />
      </div>
      <button>
        <AiOutlineShoppingCart />
        Add to Card
      </button>
    </StyledProductForm>
  );
};

export default ProductForm;
