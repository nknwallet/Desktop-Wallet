import { connect } from 'react-redux';
import React, { Component } from 'react';

import language from 'Root/helpers/language';
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
      errors.address = language.thisFieldIsNotValid[this.props.language];
    }

    if (!this.amount.value) {
      hasError = true;
      errors.amount = language.thisFieldIsNotValid[this.props.language];
    }

    if (!this.password.value) {
      hasError = true;
      errors.password = language.thisFieldIsNotValid[this.props.language];
    }

    if (Number.isNaN(Number.parseFloat(this.amount.value))) {
      hasError = true;
      errors.amount = language.pleaseEnterANumber[this.props.language];
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
        <p className={styles.title}>{language.transferNKNTo[this.props.language]}</p>
        <form action="#" onSubmit={this.handleSubmit}>
          <TextLabel>{language.transferToAddress[this.props.language]}</TextLabel>
          <input
            type="text"
            className={styles.input}
            ref={(c) => { this.address = c; }}
            placeholder={language.transferToAddress[this.props.language]}
          />
          <p className={styles.error}>{this.state.errors.address}</p>

          <TextLabel>{language.amount[this.props.language]}</TextLabel>
          <input
            type="number"
            step="0.0001"
            className={styles.input}
            ref={(c) => { this.amount = c; }}
            placeholder={language.howMuchNKNToTransfer[this.props.language]}
          />
          <p className={styles.error}>{this.state.errors.amount}</p>

          <TextLabel>{language.password[this.props.language]}</TextLabel>
          <input
            type="password"
            className={styles.input}
            ref={(c) => { this.password = c; }}
            placeholder={language.yourWalletPassword[this.props.language]}
          />
          <p className={styles.error}>{this.state.errors.password}</p>

          <button type="submit" className={styles.button}>
            {language.send[this.props.language].toUpperCase()}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(Transfer);
