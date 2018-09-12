import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import createHistory from "history/createBrowserHistory";
import App from "./App";
import { BrowserRouter, Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore } from "./store";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Router history={createHistory()}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
