import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import allReducers from "./Reducers"
import { Provider } from "react-redux"
import { LoadingOutlined } from "@ant-design/icons"
import thunk from "redux-thunk"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(allReducers, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={
      <LoadingOutlined className="float-right m-4" />
    }>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider >
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
