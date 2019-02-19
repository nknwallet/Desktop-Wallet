import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.wallet.CREATE: {
      return {
        ...action,
      };
    }

    case types.wallet.BALANCE: {
      return {
        ...state,
        balance: action.balance,
      };
    }

    case types.wallet.PRICE_USD: {
      return {
        ...state,
        priceUsd: action.priceUsd,
      };
    }

    case types.wallet.LOGOUT: {
      return {};
    }

    default: {
      return state;
    }
  }
};
