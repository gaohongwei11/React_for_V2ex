import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as home from './home/reducer';
import * as production from './production/reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

let store = createStore(
  combineReducers({...home, ...production}),
  enhancer
);

export default store;