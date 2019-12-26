import styled from "styled-components";
import { Container as CommonContainer } from "../../styles/utils";
import { mobile } from "../../styles/mediaQueries";

export const Container = styled(CommonContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${({ isSticky, theme }) =>
    isSticky && `border-bottom: 1px solid ${theme.textSecondary}`};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;

  ${mobile} {
    margin: 15px 0;
  }
`;

export const ToggleTitle = styled.span`
  text-transform: uppercase;
  margin-right: 5px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
