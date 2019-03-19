import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

const middleware = [
  thunk,
  createLogger()
];

const configrueStore = preloadedState => {

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};


export default configrueStore;