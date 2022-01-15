import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { hydrate } from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/index.js";

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
