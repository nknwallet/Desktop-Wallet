import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.wallet.CREATE: {
      return {
        name: action.name,
        password: action.password,
      };
    }

    default: {
      return state;
    }
  }
};
