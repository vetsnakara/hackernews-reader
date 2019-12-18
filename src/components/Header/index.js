import React from "react";
import { connect } from "react-redux";

import ToggleTheme from "../ToggleTheme";
import { Wrapper, Title } from "./styles";

import { doToggleTheme } from "../../actions/appActions";

const Header = ({ theme, toggleTheme }) => {
  return (
    <Wrapper>
      <Title>{"//"} Hacker News Reader</Title>
      <ToggleTheme theme={theme} onToggle={toggleTheme} />
    </Wrapper>
  );
};

const mapState = state => {
  return {
    theme: state.appState.theme
  };
};

const mapDispatch = dispatch => {
  return {
    toggleTheme: () => dispatch(doToggleTheme())
  };
};

export default connect(mapState, mapDispatch)(Header);
