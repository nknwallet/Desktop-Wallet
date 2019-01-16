import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.test: {
      return action.data;
    }

    default: {
      return state;
    }
  }
};
