import { SET_THEME } from "../constants/actionTypes";

const initialState = {
  theme: "dark"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return applySetTheme(state, action);
    default:
      return state;
  }
};

const applySetTheme = (state, { payload: { theme } }) => {
  return {
    ...state,
    theme
  };
};

export default appReducer;
