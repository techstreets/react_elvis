import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducers, {
  appReducersInitState, mergeReducers, mergeReducersInitState
} from './reducers';
import appDataReducers, { appDataReducersInitState } from './data/reducers';
import { eventsMiddleware } from './middlewares';

const history = createHistory();
const store = createStore(
  connectRouter(history)(mergeReducers([appDataReducers, appReducers])),
  mergeReducersInitState([appReducersInitState, appDataReducersInitState]),
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    eventsMiddleware
  ))
);

// on any unauthorized response go to login page
axios.interceptors.response.use(null, error => {
  const { status } = error.response;
  if (status === 401) {
    store.dispatch(push('/login'));
  }
  return Promise.reject(error);
});

// go to the home page
store.dispatch(push('/home'));

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);
registerServiceWorker();
