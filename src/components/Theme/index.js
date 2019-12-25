import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { colorsDark, colorsLight } from "../../styles/pallete";

const Theme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme === "dark" ? colorsDark : colorsLight}>
      {children}
    </ThemeProvider>
  );
};

const mapState = state => {
  return {
    theme: state.appState.theme
  };
};

export default connect(mapState)(Theme);
