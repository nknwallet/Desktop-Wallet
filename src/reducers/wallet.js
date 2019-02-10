import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.wallet.CREATE: {
      return {
        ...action,
      };
    }

    default: {
      return state;
    }
  }
};
