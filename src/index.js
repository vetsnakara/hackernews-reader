import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import GlobalStyles from "./styles/globals";
import App from "./components/App";
import Theme from "./components/Theme";

import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
