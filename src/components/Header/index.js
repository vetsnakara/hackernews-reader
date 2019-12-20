import React from "react";
import { connect } from "react-redux";

import ToggleTheme from "../ToggleTheme";
import ToggleLayout from "../ToggleLayout";

import {
  Wrapper,
  Title,
  ToggleWrapper,
  ToggleTitle,
  Container
} from "./styles";

import { doToggleTheme, doToggleLayout } from "../../actions/appActions";

import useSticky from "../../hooks/useSticky";

const Header = ({ theme, layout, toggleTheme, toggleLayout }) => {
  const { ref, isSticky } = useSticky();

  return (
    <Wrapper ref={ref} isSticky={isSticky}>
      <Container>
        <Title>{"//"} Hacker News Reader</Title>
        <ToggleWrapper>
          <ToggleTitle>Toggle</ToggleTitle>
          <ToggleLayout layout={layout} onToggle={toggleLayout} />
          <ToggleTheme theme={theme} onToggle={toggleTheme} />
        </ToggleWrapper>
      </Container>
    </Wrapper>
  );
};

const mapState = state => {
  return {
    theme: state.appState.theme,
    layout: state.appState.layout
  };
};

const mapDispatch = dispatch => {
  return {
    toggleTheme: () => dispatch(doToggleTheme()),
    toggleLayout: () => dispatch(doToggleLayout())
  };
};

export default connect(mapState, mapDispatch)(Header);
