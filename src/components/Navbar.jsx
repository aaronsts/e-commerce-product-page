import { StyledNav } from "./styles/Navbar.styled";

const Navbar = ({ setShowNav }) => {
  const toggleNav = () => {
    setShowNav(true);
  };
  return (
    <StyledNav>
      <div>
        <img
          src="./images/icon-menu.svg"
          alt="icon for mobile menu"
          onClick={toggleNav}
        />
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div>
        <img src="./images/icon-cart.svg" alt="shopping cart" />
        <img
          className="avatar"
          src="./images/image-avatar.png"
          alt="profile avatar"
        />
      </div>
    </StyledNav>
  );
};

export default Navbar;
