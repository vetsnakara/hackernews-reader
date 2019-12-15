import { combineReducers } from "redux";

import appReducer from "./appReducer";
import storyReducer from "./storyReducer";

const rootReducer = combineReducers({
  appState: appReducer,
  storyState: storyReducer
});

export default rootReducer;
