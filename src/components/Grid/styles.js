import styled from "styled-components";
import { mobile, tablet, desktop } from "../../styles/mediaQueries";

export const GridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  ${desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
