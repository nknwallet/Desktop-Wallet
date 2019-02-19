import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.less';

function QrCodeModal(props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>SCAN QRCODE</p>
      <img src={props.wallet.qrCode} alt="Qr Code" />
    </div>
  );
}

export default connect(state => ({
  wallet: state.wallet,
}))(QrCodeModal);
