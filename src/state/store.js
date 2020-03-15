import rootReducer from './root-reducer';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

const middleware = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;