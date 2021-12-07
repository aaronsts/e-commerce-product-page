import styled from "styled-components";

export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;

  height: 100vh;
  width: 100vw;

  font-size: 22px;
  font-weight: bold;
  line-height: 200%;

  .icon {
    height: 70px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .menu-bar {
    background-color: ${({ theme }) => theme.colors.white};

    padding-left: 20px;
    width: 70%;
  }

  .black-overlay {
    background-color: black;
    opacity: 0.4;
    width: 30%;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  img {
    cursor: pointer;
  }
`;
