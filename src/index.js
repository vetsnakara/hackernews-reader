import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyles from "./styles/globals";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
