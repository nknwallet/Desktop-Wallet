import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import language from 'Root/helpers/language';
import download from 'Root/helpers/download';
import Copy from 'Root/components/tools/Copy';
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

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.walletIconContainer}>
          <img src={walletIcon} alt="Wallet" />
        </div>

        <p className={styles.infoText}>
          {language.downloadYourWallet[this.props.language]}
        </p>

        <p className={styles.infoText2}>
          {language.thePrivateKey[this.props.language]}
        </p>

        <div className={styles.values}>
          <TextLabel>{language.yourPrivateKey[this.props.language]}</TextLabel>

          <div className={styles.valueContainer}>
            <div className={styles.value}>{this.props.wallet.wallet.getSeed()}</div>

            <div className={styles.copyIcon}>
              <Copy text={this.props.wallet.wallet.getSeed()} />
            </div>
          </div>

          <TextLabel>{language.yourAddress[this.props.language]}</TextLabel>

          <div className={styles.valueContainer}>
            <div className={styles.value}>{this.props.wallet.wallet.address}</div>

            <div className={styles.copyIcon}>
              <Copy text={this.props.wallet.wallet.address} />
            </div>
          </div>
        </div>


        <div className={styles.buttons}>
          <Button
            color="blue"
            onClick={this.handleDownload}
          >
            {language.download[this.props.language]}
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
          {language.noteKeepYourPrivate[this.props.language]}
        </p>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(DownloadWindow));
