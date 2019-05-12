import React from 'react';
import Rodal from 'rodal';

import closeModalAction from 'Root/actions/modal/close';

import 'rodal/lib/rodal.css';

function Modal(props) {
  return (
    <Rodal
      visible={props.visible}
      onClose={closeModalAction}
      width={props.width || 594}
      height={props.height || 338}
      showCloseButton={props.showCloseButton}
      animation={props.animation || 'slideDown'}
    >
      <div>
        {props.children}
      </div>
    </Rodal>
  );
}

export default Modal;
