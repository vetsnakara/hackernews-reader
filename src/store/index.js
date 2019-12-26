import { createStore } from "redux";
import rootReducer from "../reducers";
import middleware from "../middleware";
import { loadState, saveState } from "../services/localStorage";

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(rootReducer, persistedState, middleware);

  store.subscribe(() => {
    const { appState } = store.getState();
    saveState({ appState });
  });

  return store;
};

export default configureStore;
