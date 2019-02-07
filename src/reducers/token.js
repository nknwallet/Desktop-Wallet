import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.token.LOGIN: {
      return {
        logged: true,
        token: action.type.token,
      };
    }

    case types.token.LOGOUT: {
      return {};
    }

    default: {
      return state;
    }
  }
};
