import React from 'react';

import styles from './styles.less';

function QrCodeModal(props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{props.text}</p>
      <img src={props.image} alt="Qr Code" />
    </div>
  );
}

export default QrCodeModal;
