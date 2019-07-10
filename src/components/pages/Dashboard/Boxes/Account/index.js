import React, { Component } from 'react';
import { connect } from 'react-redux';

import qrIcon from 'Root/images/qr.png';
import Box from 'Root/components/tools/Box';
import language from 'Root/helpers/language';
import qrSmallIcon from 'Root/images/qr.svg';
import submitIcon from 'Root/images/submit.png';
import openQrCodeAction from 'Root/actions/modal/qrcode';
import openTransferAction from 'Root/actions/modal/transfer';
import openImportWalletAction from 'Root/actions/modal/importWallet';

import styles from './styles.less';

class Account extends Component {
  handleQrCodeClick = () => {
    openQrCodeAction();
  }

  handleTransfer = () => {
    openTransferAction();
  }

  handleImport = () => {
    openImportWalletAction();
  }

  render() {
    return (
      <Box
        line
        width={306}
        height={297}
        title={language.account[this.props.language]}
      >
        <div className={styles.accountBox}>
          <p className={styles.accoutTitle}>
            {language.name[this.props.language]}
            :
          </p>
          <p className={styles.accoutData}>{this.props.wallet.name}</p>

          <p className={styles.accoutTitle}>
            {language.address[this.props.language]}
            :
          </p>

          <div className={styles.qrBox}>
            <p className={styles.accoutData2}>{this.props.wallet.wallet.address}</p>

            <img
              src={qrIcon}
              alt="QR Code"
              className={styles.qrCode}
              onClick={this.handleQrCodeClick}
            />
          </div>

          <div className={styles.buttonsContainer}>
            <button
              type="button"
              className={styles.button}
              onClick={this.handleTransfer}
            >
              <div className={styles.submitButton}>
                <img src={submitIcon} alt="Submit" className={styles.submitIcon} />

                <p className={styles.buttonText}>
                  {language.send[this.props.language]}
                </p>
              </div>
            </button>

            <div
              role="presentation"
              onClick={this.handleImport}
              className={styles.importButton}
            >
              <img src={qrSmallIcon} alt="QR" />

              <p>
                {language.connectWallet[this.props.language].toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(Account);
