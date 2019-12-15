import { createStore } from "redux";
import rootReducer from "../reducers";
import middleware from "../middleware";

const configureStore = persistedState => {
  const store = createStore(rootReducer, persistedState, middleware);

  return store;
};

export default configureStore;
