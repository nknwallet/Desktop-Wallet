import moment from 'moment';
import { shell } from 'electron';
import React, { Component } from 'react';

import styles from './styles.less';

class Transaction extends Component {
  handleClick = (e) => {
    e.preventDefault();

    shell.openExternal(`https://testnet.nkn.org/detail/tx/${this.props.data.Hash}`);
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.height}>
          {this.props.data.Height}
        </p>

        <a
          className={styles.hash}
          onClick={this.handleClick}
          href={`https://testnet.nkn.org/detail/tx/${this.props.data.Hash}`}
        >
          {this.props.data.Hash}
        </a>

        <p className={styles.value}>
          {this.props.data.Value}
        </p>

        <p className={styles.time}>
          {moment(new Date(`${this.props.data.Timestamp} UTC`)).fromNow()}
        </p>
      </div>
    );
  }
}

export default Transaction;
