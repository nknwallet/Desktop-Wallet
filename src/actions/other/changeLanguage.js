import store from 'Root/store';
import types from 'Root/actions';

export default (key) => {
  global.localStorage.setItem('language', key);

  store.dispatch({
    type: types.language.CHANGE,
    language: key,
  });
};
