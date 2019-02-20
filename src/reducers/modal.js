import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.modal.OPEN: {
      return {
        visible: true,
        height: action.height,
        children: action.children,
      };
    }

    case types.modal.CLOSE: {
      return {
        visible: false,
      };
    }

    default: {
      return state;
    }
  }
};
