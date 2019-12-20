import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin-top: 24px;
  margin-bottom: 26px;
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
