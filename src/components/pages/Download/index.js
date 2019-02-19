import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import copyText from 'Root/helpers/copy';
import copyIcon from 'Root/images/copy.svg';
import download from 'Root/helpers/download';
import walletIcon from 'Root/images/wallet.svg';
import rightArrowIcon from 'Root/images/right-arrow.svg';
import TextLabel from 'Root/components/tools/TextField/Label';

import Button from './Button';
import styles from './styles.less';

class DownloadWindow extends Component {
  handleDownload = () => {
    download(`${this.props.wallet.name}.dat`, this.props.wallet.wallet.toJSON());
  }

  handleNext = () => {
    this.props.history.push('/loading');
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

        <p className={styles.infoText}>
          Download your wallet file and save
        </p>

        <p className={styles.infoText2}>
          the private key
        </p>

        <div className={styles.values}>
          <TextLabel>Your private key</TextLabel>

          <div className={styles.valueContainer}>
            <div className={styles.value}>{this.props.wallet.wallet.getPrivateKey()}</div>

            <div className={styles.copyIcon}>
              <img
                alt="Copy"
                src={copyIcon}
                onClick={this.handleCopy(this.props.wallet.wallet.getPrivateKey())}
              />
            </div>
          </div>

          <TextLabel>Your address</TextLabel>

          <div className={styles.valueContainer}>
            <div className={styles.value}>{this.props.wallet.wallet.address}</div>

            <div className={styles.copyIcon}>
              <img
                alt="Copy"
                src={copyIcon}
                onClick={this.handleCopy(this.props.wallet.wallet.address)}
              />
            </div>
          </div>
        </div>


        <div className={styles.buttons}>
          <Button
            color="blue"
            onClick={this.handleDownload}
          >
            Download
          </Button>

          <Button
            color="grey"
            onClick={this.handleNext}
          >
            Next
            <img
              alt="Right Arrow"
              src={rightArrowIcon}
              className={styles.rightArrow}
            />
          </Button>
        </div>

        <p className={styles.note}>
          Note: Keep your private key very safely, because anyone with the
          private key can rebuild this wallet!
        </p>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  wallet: state.wallet,
}))(DownloadWindow));
