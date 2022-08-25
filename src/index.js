import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {legacy_createStore as createStore} from 'redux'
//import getAction from './reducers/getAction'
import allreducers from './reducers';
import {Provider} from 'react-redux'

/*
//store
const store = createStore(getAction);

store.subscribe(()=>console.log(store.getState()))

//dispatch action
store.dispatch(enter('econsys'))
*/

//store is here
const store = createStore(allreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
