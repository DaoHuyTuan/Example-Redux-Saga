import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import itemReducer from "./Reducers/itemReducer.js"
// plugin redux 
import logger from "redux-logger";
import createSagaMiddleWare from "redux-saga";

import * as serviceWorker from './serviceWorker';

// const Sagas = createSagaMiddleWare();
// Sagas.run();
const rootReducer = combineReducers({
    itemRD:itemReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
