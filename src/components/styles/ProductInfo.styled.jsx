import styled from "styled-components";

export const StyledProductInfo = styled.div`
  padding: 0 20px;

  .price {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 20px 0;

    p {
      text-decoration: line-through;
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 28px;
    padding-bottom: 20px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.orange};

    font-size: 12px;
    letter-spacing: 0.12rem;
    text-transform: uppercase;

    padding: 20px 0;
  }

  h3 {
    font-size: 28px;
    padding-right: 20px;
  }

  p {
    color: ${({ theme }) => theme.colors.grayBlue};

    line-height: 160%;
    padding-bottom: 10px;
  }

  span {
    color: ${({ theme }) => theme.colors.orange};
    background-color: ${({ theme }) => theme.colors.paleOrange};

    padding: 6px 8px;
    border-radius: 5px;

    line-height: 1;
    font-weight: bold;
  }
`;
