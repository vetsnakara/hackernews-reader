import { connect } from "react-redux";

import Header from "./Header";

import { doToggleTheme, doToggleLayout } from "../../actions/appActions";

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
