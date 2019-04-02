import { connect } from 'react-redux';
import React, { Component } from 'react';

import Box from 'Root/components/tools/Box';
import download from 'Root/helpers/download';
import language from 'Root/helpers/language';
import openPrivateKeyModal from 'Root/actions/modal/privateKey';

import styles from './styles.less';

class Backup extends Component {
  handleDownloadClick = () => {
    download(`${this.props.wallet.name}.dat`, this.props.wallet.wallet.toJSON());
  }

  handlePrivateKeyClick = () => {
    openPrivateKeyModal();
  }

  render() {
    return (
      <Box
        line
        width={309}
        height={263}
        title={language.backup[this.props.language]}
      >
        <div className={styles.desciption}>
          <p className={styles.textGrey}>
            {language.downloadWalletFromHere[this.props.language]}
          </p>

          <button
            type="button"
            className={styles.button}
            onClick={this.handleDownloadClick}
          >
            {language.download[this.props.language]}
          </button>

          <p className={styles.textGrey2}>{language.showingYourPrivateKey[this.props.language]}</p>

          <button
            type="button"
            className={styles.button}
            onClick={this.handlePrivateKeyClick}
          >
            {language.showPrivateKey[this.props.language]}
          </button>
        </div>
      </Box>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(Backup);
