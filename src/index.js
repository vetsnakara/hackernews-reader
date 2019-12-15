import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globals";
import App from "./components/App";

import { colorsDark } from "./styles/pallete";
import configureStore from "./store";

import { doFetchStories } from "./actions/storyActions";

const store = configureStore({});

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

store.dispatch(doFetchStories());
