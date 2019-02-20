import React, { Component } from 'react';

import TextLabel from 'Root/components/tools/TextField/Label';
import transferMoneyAction from 'Root/actions/wallet/transfer';

import styles from './styles.less';

class Transfer extends Component {
  state = {
    errors: {
      amount: '',
      address: '',
      password: '',
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      amount: '',
      address: '',
      password: '',
    };

    let hasError = false;

    if (!this.address.value) {
      hasError = true;
      errors.address = 'This field is invalid.';
    }

    if (!this.amount.value) {
      hasError = true;
      errors.amount = 'This field is invalid.';
    }

    if (!this.password.value) {
      hasError = true;
      errors.password = 'This field is invalid.';
    }

    this.setState({
      errors: {
        amount: errors.amount,
        address: errors.address,
        password: errors.password,
      },
    });

    if (!hasError) {
      transferMoneyAction({
        amount: this.amount.value,
        address: this.address.value,
        password: this.password.value,
        setState: this.setState.bind(this),
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>NKN transfer to</p>
        <form action="#" onSubmit={this.handleSubmit}>
          <TextLabel>Transfer to address</TextLabel>
          <input
            type="text"
            className={styles.input}
            placeholder="Transfer to address"
            ref={(c) => { this.address = c; }}
          />
          <p className={styles.error}>{this.state.errors.address}</p>

          <TextLabel>NKN amount</TextLabel>
          <input
            type="text"
            className={styles.input}
            ref={(c) => { this.amount = c; }}
            placeholder="How much NKN to transfer"
          />
          <p className={styles.error}>{this.state.errors.amount}</p>

          <TextLabel>Password</TextLabel>
          <input
            type="password"
            className={styles.input}
            placeholder="Your wallet password"
            ref={(c) => { this.password = c; }}
          />
          <p className={styles.error}>{this.state.errors.password}</p>

          <button type="submit" className={styles.button}>
            SEND
          </button>
        </form>
      </div>
    );
  }
}

export default Transfer;
