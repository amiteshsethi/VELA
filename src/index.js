import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

// creating a store with redux
const store = createStore(movies);

console.log('store',store)

// store.dispatch({
//   type :'ADD_MOVIES',
//   movies : [{name : 'HER'}]
// })

// console.log('Store State - AFTER',store.getState())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
