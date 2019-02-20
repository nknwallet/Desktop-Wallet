import React, { Component } from 'react';
import { connect } from 'react-redux';

import copyText from 'Root/helpers/copy';
import copyIcon from 'Root/images/copy.svg';
import closeModalAction from 'Root/actions/modal/close';

import styles from './styles.less';

class Show extends Component {
  state = {
    privateKey: this.props.wallet.wallet.getPrivateKey(),
  }

  handleClick = () => {
    closeModalAction();
  }

  handleCopy = () => {
    copyText(this.state.privateKey);
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Private key</p>

        <div className={styles.privateKeyContainer}>
          <p className={styles.privateKey}>{this.state.privateKey}</p>

          <img
            alt="Copy"
            src={copyIcon}
            className={styles.icon}
            onClick={this.handleCopy}
          />
        </div>

        <button type="button" onClick={this.handleClick} className={styles.button}>
          OK
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
}))(Show);
