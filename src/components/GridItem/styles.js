import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  overflow: hidden;
`;

export const ExternalLink = styled.a``;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0 0 20px;
  padding: 10px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export const Source = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 10px;
`;
