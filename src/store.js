import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

if (process.env.NODE_ENV === 'development') {
  global.store = store;
}

export default store;
