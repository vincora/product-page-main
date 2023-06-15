import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  item: {},
  amount: 0,
  modalOpen: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "cart/addItemsToCart":
      return { ...state, amount: action.payload.amount, item: action.payload.item };
    case "cart/removeItemFromCart":
      return { ...state, amount: 0 };
    case "modal/setOpen":
      return {...state, modalOpen: true};
    case "modal/setClose":
      return {...state, modalOpen: false};
    default:
      return state;
  }
};

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
