import React from 'react';
import Rodal from 'rodal';

import closeModalAction from 'Root/actions/modal/close';

import 'rodal/lib/rodal.css';

function Modal(props) {
  return (
    <Rodal
      width={594}
      animation="slideDown"
      visible={props.visible}
      onClose={closeModalAction}
      height={props.height || 338}
    >
      <div>
        {props.children}
      </div>
    </Rodal>
  );
}

export default Modal;
