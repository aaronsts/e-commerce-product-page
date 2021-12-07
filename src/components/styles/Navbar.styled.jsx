import styled from "styled-components";

export const StyledNav = styled.div`
  height: 70px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }

  img {
    cursor: pointer;
  }

  .avatar {
    width: 30px;
    margin-right: 0px;
  }
`;
