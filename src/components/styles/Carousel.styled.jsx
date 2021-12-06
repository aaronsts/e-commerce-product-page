import styled from "styled-components";

export const StyledCarousel = styled.div`
  @media (max-width: ${({ theme }) => theme.dimensions.mobile}) {
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 100%;
    }

    .arrow-left {
      background: ${({ theme }) => theme.colors.white};
      width: 30px;
      height: 30px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      left: 0;
      z-index: 9;

      margin-left: 10px;

      cursor: pointer;
    }

    .arrow-right {
      background-color: ${({ theme }) => theme.colors.white};
      width: 30px;
      height: 30px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      right: 0;

      margin-right: 10px;

      cursor: pointer;
    }
  }
`;
