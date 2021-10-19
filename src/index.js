import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./app/common/Utils/ScrollToTop";
import App from "./app/layout/App";
import { configureStore } from "./app/store/ConfigureStore";
import { loadEvent } from "./features/event/eventActions";
import "./index.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";

const store = configureStore();
store.dispatch(loadEvent());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <ReduxToastr
        position="bottom-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
