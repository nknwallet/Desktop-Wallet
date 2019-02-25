import types from 'Root/actions';

export default (state = false, action) => {
  switch (action.type) {
    case types.internet.ONLINE: {
      return true;
    }

    case types.internet.OFFLINE: {
      return false;
    }

    default: {
      return state;
    }
  }
};
