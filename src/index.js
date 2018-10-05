import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducers, {
  appReducersInitState, mergeReducers, mergeReducersInitState
} from './reducers';
import appDataReducers, { appDataReducersInitState } from './data/reducers';
import { eventsMiddleware } from './middlewares';

const store = createStore(
  mergeReducers([appDataReducers, appReducers]),
  mergeReducersInitState([appReducersInitState, appDataReducersInitState]),
  composeWithDevTools(applyMiddleware(
    eventsMiddleware
  ))
);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
