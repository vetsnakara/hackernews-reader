import { TOGGLE_THEME } from "../constants/actionTypes";

const initialState = {
  theme: "dark"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return applyToggleTheme(state);
    default:
      return state;
  }
};

const applyToggleTheme = state => {
  return {
    theme: state.theme === "dark" ? "light" : "dark"
  };
};

export default appReducer;
