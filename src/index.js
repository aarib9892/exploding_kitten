import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
