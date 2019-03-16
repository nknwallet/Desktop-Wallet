import React from 'react';
import { connect } from 'react-redux';

import language from 'Root/helpers/language';

import styles from './styles.less';

function QrCodeModal(props) {
  return (
    <div className={styles.container}>
      <img src={props.wallet.qrCode} alt="Qr Code" />

      <div className={styles.line} />

      <p className={styles.text}>
        {language.scanQrCode[props.language]}
      </p>
    </div>
  );
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(QrCodeModal);
