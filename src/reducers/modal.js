import types from 'Root/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case types.modal.OPEN: {
      return {
        visible: true,
        width: action.width,
        height: action.height,
        children: action.children,
        animation: action.animation,
        showCloseButton: action.showCloseButton,
      };
    }

    case types.modal.CHANGE_MODAL_CONTENT: {
      return {
        ...state,
        children: action.children,
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
