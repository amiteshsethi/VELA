import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// logger (obj) (next)(action) // currying function
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("action_type", action.type);
//       next(action);
//     };
//   };
// };
// simpler form of above code 
const logger = ({ dispatch, getState }) => (next) => (action) => {
  //middleware code
  if (typeof action !== 'function') {
  console.log("action_type", action.type);
  }
  next(action);
}

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   //middleware code
//   if (typeof action === 'function'){
//     action(dispatch)
//     return
//   }
//   next(action);
// }

// creating a store with redux which takes a reducer as an argument
const store = createStore(rootReducer , applyMiddleware(logger ,thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
