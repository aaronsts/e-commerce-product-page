import { StyledMenu } from "./styles/Menu.styled";

const Menu = ({ showNav, setShowNav }) => {
  const style = {
    display: showNav ? "" : "none",
  };

  const toggleNav = () => {
    setShowNav(false);
  };

  return (
    <StyledMenu style={style}>
      <div className="menu-bar">
        <div className="icon">
          <img
            src="./images/icon-close.svg"
            alt="close button"
            onClick={toggleNav}
          />
        </div>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="black-overlay"></div>
    </StyledMenu>
  );
};

export default Menu;
