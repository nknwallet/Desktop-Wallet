import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.login: {
      return {
        logged: true,
      };
    }

    case types.logout: {
      return {
        logged: false,
      };
    }

    default: {
      return state;
    }
  }
};
