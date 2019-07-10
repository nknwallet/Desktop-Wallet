import React, { Component } from 'react';
import { connect } from 'react-redux';

import language from 'Root/helpers/language';
import phoneImport from 'Root/images/phoneImport.svg';
import laptopImport from 'Root/images/laptopImport.svg';
import importQrCode from 'Root/actions/wallet/importWallet';

import styles from './styles.less';

class ImportWallet extends Component {
  state = {
    qr: null,
  }

  componentDidMount() {
    importQrCode(
      this.props.wallet.wallet.toJSON(),
      global.sessionStorage.getItem('password'),
    )
      .then(result => this.setState({ qr: result }));
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.chart}>
          <div className={styles.circle}>
            <img src={phoneImport} alt="Phone" className={styles.phoneImport} />
          </div>

          <p className={styles.text1}>{'- - - - - - - - - - - - - >'}</p>
          <p className={styles.text2}>{'- >'}</p>

          <div className={styles.circle}>
            <img src={laptopImport} alt="Laptop" className={styles.laptopImport} />
          </div>
        </div>

        <div className={styles.qrBox}>
          <div className={styles.qrContainer}>
            <img src={this.state.qr} alt="Qr Code" className={styles.qrImage} />
          </div>

          <p className={styles.scanMe}>{language.scanQrCode[this.props.language]}</p>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(ImportWallet);
