import moment from 'moment';
import { connect } from 'react-redux';
import { shell } from 'electron';
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
          {this.props.data.block_height}
        </p>

        <a
          className={styles.hash}
          onClick={this.handleClick}
          href={`https://testnet.nkn.org/detail/tx/${this.props.data.hash}`}
        >
          {this.props.data.hash}
        </a>

        <a
          onClick={this.handleClick}
          className={styles.shortHash}
          href={`https://testnet.nkn.org/detail/tx/${this.props.data.hash}`}
        >
          {shortHash(this.props.data.hash)}
        </a>

        <p className={styles.value}>
          {this.props.data.nonce}
        </p>

        <p className={styles.shortValue}>
          {Number.parseFloat(this.props.data.nonce, 10).toPrecision(6)}
        </p>

        <p className={styles.time}>
          {moment(new Date(`${this.props.data.created_at} UTC`)).fromNow()}
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
