import { TOGGLE_THEME, TOGGLE_LAYOUT } from "../constants/actionTypes";

export const doToggleTheme = () => {
  return {
    type: TOGGLE_THEME
  };
};
export const doToggleLayout = () => {
  return {
    type: TOGGLE_LAYOUT
  };
};
