import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};

  width: 100%;
  padding: 15px 0;
  border-radius: 10px;

  box-shadow: 0px 15px 25px 0px ${({ theme }) => theme.colors.orangeFaded};
  border: none;

  font-size: 18px;
  font-weight: bold;
  svg {
    margin-right: 15px;
  }
`;
