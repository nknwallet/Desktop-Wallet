import React from 'react';
import Rodal from 'rodal';

import closeModalAction from 'Root/actions/modal/close';

import 'rodal/lib/rodal.css';
import styles from './styles.less';

function Modal(props) {
  return (
    <Rodal visible={props.visible} animation="slideDown" onClose={closeModalAction}>
      <div className={styles.container}>
        {props.children}
      </div>
    </Rodal>
  );
}

export default Modal;
