import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const Button = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const UpButton = () => {
  return <Button onClick={() => scroll.scrollToTop()}>Up</Button>;
};

export default UpButton;
