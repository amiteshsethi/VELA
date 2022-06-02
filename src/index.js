import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
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
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //middleware code
    if (typeof action !== "function") {
      console.log("action:", action.type);
    }
    next(action);
  };

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   //middleware code
//   if (typeof action === 'function'){
//     action(dispatch)
//     return
//   }
//   next(action);
// }

// creating a store with redux which takes a reducer as an argument

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
// export const StoreContext = createContext();

// class Provider extends Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// // const connectedAppComponent =  connect(callback)(App)
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends Component {
//       constructor(props) {
//         super(props);
//         this.unsuscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillMount() {
//         this.unsuscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//       }
//     }

//     class ConnectedComponentWrapper extends Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals