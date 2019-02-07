import { combineReducers } from 'redux';

import token from './token';
import modal from './modal';
import wallet from './wallet';

export default combineReducers({
  token,
  modal,
  wallet,
});
