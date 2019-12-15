import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import GlobalStyles from "./styles/globals";
import configureStore from "./store";

import App from "./components/App";

const store = configureStore({});

if (process.env.NODE_ENV !== "production") {
  store.dispatch({ type: "@hnApp/@@INIT" });
}

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
