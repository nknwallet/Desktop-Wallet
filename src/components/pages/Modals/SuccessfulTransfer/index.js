import React, { Component } from 'react';
import { shell } from 'electron';

import failureIcon from 'Root/images/error.svg';
import closeModalAction from 'Root/actions/modal/close';
import successfulIcon from 'Root/images/successful.svg';

import styles from './styles.less';

class SuccessfulTransfer extends Component {
  handleClick = () => {
    closeModalAction();
  }

  handleClickHash = (e) => {
    e.preventDefault();

    shell.openExternal(
      `https://testnet.nkn.org/detail/tx/${this.props.hash}`,
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.icon}
          alt="Successful Transaction"
          src={this.props.failure ? failureIcon : successfulIcon}
        />

        <p className={styles.title}>
          {this.props.failure ? 'ERROR' : 'Successful Sending'}
        </p>

        <a
          className={styles.hash}
          href="https://google.com"
          onClick={this.handleClickHash}
        >
          {!this.props.failure && this.props.hash}
        </a>

        <button type="button" onClick={this.handleClick} className={styles.button}>
          OK
        </button>
      </div>
    );
  }
}

export default SuccessfulTransfer;
