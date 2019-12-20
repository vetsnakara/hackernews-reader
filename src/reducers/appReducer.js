import { TOGGLE_THEME, TOGGLE_LAYOUT } from "../constants/actionTypes";

const initialState = {
  theme: "dark",
  layout: "grid"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return applyToggleTheme(state);
    case TOGGLE_LAYOUT:
      return applyToggleLayout(state);
    default:
      return state;
  }
};

const applyToggleTheme = state => {
  return {
    ...state,
    theme: state.theme === "dark" ? "light" : "dark"
  };
};

const applyToggleLayout = state => {
  return {
    ...state,
    layout: state.layout === "list" ? "grid" : "list"
  };
};

export default appReducer;
