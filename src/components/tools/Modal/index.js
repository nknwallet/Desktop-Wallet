import React from 'react';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

function Modal(props) {
  return (
    <Rodal visible={props.visible} animation="slideDown">
      {props.children}
    </Rodal>
  );
}

export default Modal;
