import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";
import "./index.css";
import App from "./App";
import reducer from './reducers';


const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);
