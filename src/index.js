import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./app/common/Utils/ScrollToTop";
import App from "./app/layout/App";
import { configureStore } from "./app/store/ConfigureStore";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
