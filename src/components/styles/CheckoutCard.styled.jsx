import styled from "styled-components";

export const StyledCheckout = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 11;

  width: 350px;
  margin: 0 auto;
  padding: 30px 20px;

  border-radius: 10px;

  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 0;

    color: ${({ theme }) => theme.colors.grayBlue};
    line-height: 140%;

    span {
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
    }
  }

  img {
    width: 50px;
    border-radius: 10px;
  }

  h2 {
    font-size: 18px;
    padding-bottom: 20px;
  }

  hr {
    color: ${({ theme }) => theme.colors.lightGrayBlue};
    opacity: 0.3;
    width: 350px;
    margin-left: -20px;
  }
`;
