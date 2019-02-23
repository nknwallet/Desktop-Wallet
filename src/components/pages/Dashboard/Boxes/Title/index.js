import { connect } from 'react-redux';
import React, { Component } from 'react';

import Box from 'Root/components/tools/Box';
import download from 'Root/helpers/download';
import openPrivateKeyModal from 'Root/actions/modal/privateKey';

import styles from './styles.less';

class Title extends Component {
  handleDownloadClick = () => {
    download(`${this.props.wallet.name}.dat`, this.props.wallet.wallet.toJSON());
  }

  handlePrivateKeyClick = () => {
    openPrivateKeyModal();
  }

  render() {
    return (
      <Box title="Title" width={309} height={249} line>
        <div className={styles.desciption}>
          <p className={styles.textGrey}>Download Wallet from here</p>

          <button
            type="button"
            className={styles.button}
            onClick={this.handleDownloadClick}
          >
            Download
          </button>

          <p className={styles.textGrey2}>Showing your private key</p>

          <button
            type="button"
            className={styles.button}
            onClick={this.handlePrivateKeyClick}
          >
            Show private key
          </button>
        </div>
      </Box>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
}))(Title);
