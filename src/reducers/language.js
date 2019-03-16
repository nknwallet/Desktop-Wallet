import types from 'Root/actions';

const language = global.localStorage.getItem('language') || 'en';

export default (state = language, action) => {
  switch (action.type) {
    case types.language.CHANGE: {
      return action.language;
    }

    default: {
      return state;
    }
  }
};
