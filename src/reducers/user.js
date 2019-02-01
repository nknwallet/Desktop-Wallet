import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.user.LOGIN: {
      return {
        logged: true,
        token: action.token,
      };
    }

    case types.user.LOGOUT: {
      return {
        logged: false,
      };
    }

    default: {
      return state;
    }
  }
};
