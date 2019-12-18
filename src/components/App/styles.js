import styled from "styled-components";
import { tablet } from "../../styles/mediaQueries";

export const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  height: 100%;
  padding-bottom: 100px;

  ${tablet} {
    width: 96%;
  }
`;
