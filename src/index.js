// PACKAGE IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

// FILE IMPORTS
import "./index.css";
import App from "./components/App";
import reducer from './reducers';

// CREATING STORE WITH IMPORTED REDUCER FILE
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);
