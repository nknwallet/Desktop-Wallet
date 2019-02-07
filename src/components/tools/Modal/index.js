import React from 'react';
import Rodal from 'rodal';

import closeModalAction from 'Root/actions/modal/close';

import 'rodal/lib/rodal.css';

function Modal(props) {
  return (
    <Rodal visible={props.visible} animation="slideDown" onClose={closeModalAction}>
      {props.children}
    </Rodal>
  );
}

export default Modal;
