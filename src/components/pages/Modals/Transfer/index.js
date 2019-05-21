import nknWallet from 'nkn-wallet';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import language from 'Root/helpers/language';
import equalIcon from 'Root/images/equal.svg';
import TextLabel from 'Root/components/tools/TextField/Label';
import transferMoneyAction from 'Root/actions/wallet/transfer';

import styles from './styles.less';

class Transfer extends Component {
  state = {
    errors: {
      amount: '',
      address: '',
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      amount: '',
      address: '',
    };

    let hasError = false;

    if (!this.address.value) {
      hasError = true;
      errors.address = language.thisFieldIsNotValid[this.props.language];
    }

    if (!nknWallet.verifyAddress(this.address.value)) {
      hasError = true;
      errors.address = language.addressIsInvalid[this.props.language];
    }

    if (!this.amount.value) {
      hasError = true;
      errors.amount = language.thisFieldIsNotValid[this.props.language];
    }

    if (this.amount.value === '0') {
      hasError = true;
      errors.amount = language.thisFieldIsNotValid[this.props.language];
    }

    if (Number.isNaN(Number.parseFloat(this.amount.value))) {
      hasError = true;
      errors.amount = language.pleaseEnterANumber[this.props.language];
    }

    this.setState({
      errors: {
        amount: errors.amount,
        address: errors.address,
      },
    });

    if (!hasError) {
      transferMoneyAction({
        amount: this.amount.value,
        address: this.address.value,
        setState: this.setState.bind(this),
      });
    }
  }

  render() {
    const amount = Number.parseFloat(this.amount.value, 10);
    const price = Number.parseFloat(this.props.wallet.price, 10);

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

          <div className={styles.priceToUSD}>
            <p className={styles.nknPrice}>
              {amount || '0'}
              &nbsp;
              NKN
            </p>

            <img src={equalIcon} alt="Equal" />

            <p className={styles.usdPrice}>
              $
              {(price * amount).toFixed(2)}
            </p>
          </div>

          <button type="submit" className={styles.button}>
            {language.send[this.props.language]}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(Transfer);
