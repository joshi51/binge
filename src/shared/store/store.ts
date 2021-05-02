import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxLogger from 'redux-logger';

/*declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(reduxLogger));*/
export default createStore(rootReducer);
