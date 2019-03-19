import moment from 'moment';
import { shell } from 'electron';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import shortHash from 'Root/helpers/shortHash';
import redArrow from 'Root/images/redArrow.png';
import greenArrow from 'Root/images/greenArrow.png';

import styles from './styles.less';

class Transaction extends Component {
  handleClick = (e) => {
    e.preventDefault();

    shell.openExternal(`https://testnet.nkn.org/detail/tx/${this.props.data.Hash}`);
  }

  render() {
    const isMoneyComing = this.props.data.FromAddr === this.props.wallet.wallet.address;

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

        <a
          onClick={this.handleClick}
          className={styles.shortHash}
          href={`https://testnet.nkn.org/detail/tx/${this.props.data.Hash}`}
        >
          {shortHash(this.props.data.Hash)}
        </a>

        <p className={styles.value}>
          {this.props.data.Value}
        </p>

        <p className={styles.shortValue}>
          {Number.parseFloat(this.props.data.Value, 10).toPrecision(6)}
        </p>

        <p className={styles.time}>
          {moment(new Date(`${this.props.data.Timestamp} UTC`)).fromNow()}
        </p>

        <img
          alt="Arrow"
          className={styles.arrow}
          src={isMoneyComing ? redArrow : greenArrow}
        />
      </div>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
}))(Transaction);
