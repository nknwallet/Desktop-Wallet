import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.modal.OPEN: {
      return {
        visible: true,
        width: action.width,
        height: action.height,
        children: action.children,
        showCloseButton: action.showCloseButton,
      };
    }

    case types.modal.CLOSE: {
      return {
        ...state,
        visible: false,
      };
    }

    default: {
      return state;
    }
  }
};
