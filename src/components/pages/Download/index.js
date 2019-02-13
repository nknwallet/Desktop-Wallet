import { connect } from 'react-redux';
import React, { Component } from 'react';

import { push } from 'Root/history';
import copyText from 'Root/helpers/copy';
import copyIcon from 'Root/images/copy.svg';
import download from 'Root/helpers/download';
import walletIcon from 'Root/images/wallet.svg';
import Button from 'Root/components/tools/Button';
import TextLabel from 'Root/components/tools/TextField/Label';

import styles from './styles.less';

class DownloadWindow extends Component {
  handleDownload = () => {
    download(`${this.props.wallet.name}.dat`, this.props.wallet.wallet.toJSON());
  }

  handleNext = () => {
    push('/dashboard');
  }

  handleCopy = text => () => {
    copyText(text);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.walletIconContainer}>
          <img src={walletIcon} alt="Wallet" />
        </div>

        <p className={styles.infoText}>Download your wallet file and save the private key</p>

        <TextLabel>Your private key</TextLabel>
        <div className={styles.value}>{this.props.wallet.wallet.getPrivateKey()}</div>
        <img
          alt="Copy"
          src={copyIcon}
          className={styles.copyIcon}
          onClick={this.handleCopy(this.props.wallet.wallet.getPrivateKey())}
        />

        <TextLabel>Your address</TextLabel>
        <div className={styles.value}>{this.props.wallet.wallet.address}</div>
        <img
          alt="Copy"
          src={copyIcon}
          onClick={this.handleCopy(this.props.wallet.wallet.address)}
          className={styles.copyIcon}
        />

        <div className={styles.buttons}>
          <Button onClick={this.handleDownload}>Download</Button>

          <Button onClick={this.handleNext}>Next</Button>
        </div>

        <p className={styles.note}>
          Note: Keep your private key very safely, because anyone with the
          private key can rebuild this wallet!
        </p>
      </div>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
}))(DownloadWindow);
