import { combineReducers } from "redux";

import appReducer from "./appReducer";
import storyReducer from "./storyReducer";
import idReducer from "./idReducer";

const rootReducer = combineReducers({
  appState: appReducer,
  storyState: storyReducer,
  idState: idReducer
});

export default rootReducer;
