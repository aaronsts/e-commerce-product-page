import styled from "styled-components";

export const StyledProductForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.lightGrayBlue};

    width: 100%;
    padding: 20px 10px;
    margin-bottom: 20px;

    border-radius: 10px;

    font-weight: bold;

    svg {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
  .icons path {
    stroke-width: 100px;
  }
`;
