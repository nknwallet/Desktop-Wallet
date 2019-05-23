import classnames from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import copyText from 'Root/helpers/copy';
import copyIcon from 'Root/images/copy.svg';
import language from 'Root/helpers/language';
import shortHash from 'Root/helpers/shortHash';

import styles from './styles.less';

class QrCodeModal extends Component {
  handleCopy = () => {
    copyText(this.props.wallet.wallet.address);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.qrBox}>
          <div className={styles.qrContainer}>
            <img src={this.props.wallet.qrCode} alt="Qr Code" className={styles.qrImage} />
          </div>

          <p className={styles.scanMe}>{language.scanQrCode[this.props.language]}</p>
        </div>

        <div className={styles.address}>
          <div className={classnames(styles.text, styles.longText)}>
            {this.props.wallet.wallet.address}
          </div>

          <div className={classnames(styles.text, styles.shortText)}>
            {shortHash(this.props.wallet.wallet.address, 6)}
          </div>

          <div className={styles.copy} role="presentation" onClick={this.handleCopy}>
            <img src={copyIcon} alt="Copy" title="Copy" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(QrCodeModal);
