import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg > path {
    fill: ${({ theme }) => theme.text};
  }
`;
