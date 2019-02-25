import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.less';

function QrCodeModal(props) {
  return (
    <div className={styles.container}>
      <img src={props.wallet.qrCode} alt="Qr Code" />

      <div className={styles.line} />

      <p className={styles.text}>SCAN QRCODE</p>
    </div>
  );
}

export default connect(state => ({
  wallet: state.wallet,
}))(QrCodeModal);
