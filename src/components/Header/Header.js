import React from "react";

import ToggleTheme from "../ToggleTheme";
import ToggleLayout from "../ToggleLayout";

import {
  Wrapper,
  Title,
  ToggleWrapper,
  ToggleTitle,
  Container
} from "./styles";

import useSticky from "../../hooks/useSticky";

const Header = ({ theme, layout, toggleTheme, toggleLayout }) => {
  const { ref, isSticky } = useSticky();

  return (
    <Wrapper ref={ref} isSticky={isSticky}>
      <Container>
        <Title>{"//"} HN Reader</Title>
        <ToggleWrapper>
          <ToggleTitle>Toggle</ToggleTitle>
          <ToggleLayout layout={layout} onToggle={toggleLayout} />
          <ToggleTheme theme={theme} onToggle={toggleTheme} />
        </ToggleWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
