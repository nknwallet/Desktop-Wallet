import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.wallet.CREATE: {
      return {
        ...action,
      };
    }

    case types.wallet.BLOCK: {
      return {
        ...state,
        block: action.block,
      };
    }

    case types.wallet.QRCODE: {
      return {
        ...state,
        qrCode: action.qrCode,
      };
    }

    case types.wallet.BALANCE: {
      return {
        ...state,
        balance: action.balance,
      };
    }

    case types.wallet.PRICE: {
      return {
        ...state,
        price: action.price,
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

    case types.wallet.TRANSACTIONS: {
      return {
        ...state,
        transactions: action.list,
      };
    }

    default: {
      return state;
    }
  }
};
