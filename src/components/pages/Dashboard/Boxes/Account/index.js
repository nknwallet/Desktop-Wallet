import React, { Component } from 'react';
import { connect } from 'react-redux';

import qrIcon from 'Root/images/qr.png';
import Box from 'Root/components/tools/Box';
import submitIcon from 'Root/images/submit.png';
import Button from 'Root/components/tools/Button';
import openQrCodeAction from 'Root/actions/modal/qrcode';
import openTransferAction from 'Root/actions/modal/transfer';

import styles from './styles.less';

class Account extends Component {
  handleQrCodeClick = () => {
    openQrCodeAction();
  }

  handleTransfer = () => {
    openTransferAction();
  }

  render() {
    return (
      <Box title="Account" width={395} height={383} line>
        <div className={styles.accountBox}>
          <p className={styles.accoutTitle}>Name:</p>
          <p className={styles.accoutData}>{this.props.wallet.name}</p>

          <p className={styles.accoutTitle}>Address:</p>

          <div className={styles.qrBox}>
            <p className={styles.accoutData2}>{this.props.wallet.wallet.address}</p>

            <img
              src={qrIcon}
              alt="QR Code"
              className={styles.qrCode}
              onClick={this.handleQrCodeClick}
            />
          </div>

          <Button
            padding="11px 33px"
            onClick={this.handleTransfer}
          >
            <div className={styles.submitButton}>
              <img src={submitIcon} alt="Submit" className={styles.submitIcon} />

              <p>SEND</p>
            </div>
          </Button>
        </div>
      </Box>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
}))(Account);
