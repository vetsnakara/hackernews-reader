import { SET_THEME } from "../constants/actionTypes";

export const doSetTheme = theme => {
  return {
    type: SET_THEME,
    theme
  };
};
