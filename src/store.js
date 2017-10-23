import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();
const router = routerMiddleware(history); // Build the middleware for intercepting and dispatching navigation actions

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger, router))
);

export default store;