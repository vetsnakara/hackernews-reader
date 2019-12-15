import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globals";
import App from "./components/App";

import { colorsDark } from "./styles/pallete";
import configureStore from "./store";

const store = configureStore({});

if (process.env.NODE_ENV !== "production") {
  store.dispatch({ type: "@hnApp/@@INIT" });
}

ReactDOM.render(
  <React.Fragment>
    <StoreProvider store={store}>
      <ThemeProvider theme={colorsDark}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.Fragment>,
  document.getElementById("root")
);
