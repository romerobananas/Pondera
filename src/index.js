import React from "react";
import { render } from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "../node_modules/paper/dist/paper-full";
import "./styles/styles.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("app")
);
