import React from "react";
import styled from "styled-components";

const Container = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
`;

const Message = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Message;
