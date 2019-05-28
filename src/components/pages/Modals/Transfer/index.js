import nknWallet from 'nkn-wallet';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import language from 'Root/helpers/language';
import equalIcon from 'Root/images/equal.svg';
import SmallInput from 'Root/components/tools/SmallInput';
import TextLabel from 'Root/components/tools/TextField/Label';
import transferMoneyAction from 'Root/actions/wallet/transfer';

import styles from './styles.less';

class Transfer extends Component {
  state = {
    errors: {
      amount: '',
      address: '',
    },
    usd: 0,
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      amount: '',
      address: '',
    };

    const amount = this.amount || '';
    const address = this.address || '';

    let hasError = false;

    if (!address) {
      hasError = true;
      errors.address = language.thisFieldIsNotValid[this.props.language];
    }

    if (!nknWallet.verifyAddress(address)) {
      hasError = true;
      errors.address = language.addressIsInvalid[this.props.language];
    }

    if (!amount) {
      hasError = true;
      errors.amount = language.thisFieldIsNotValid[this.props.language];
    }

    if (amount === '0') {
      hasError = true;
      errors.amount = language.thisFieldIsNotValid[this.props.language];
    }

    if (Number.isNaN(Number.parseFloat(amount))) {
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
        amount,
        address,
        setState: this.setState.bind(this),
      });
    }
  }

  handleChange = () => {
    let errorAmount = '';

    if (this.amount === '0') {
      errorAmount = language.thisFieldIsNotValid[this.props.language];
    }

    if (Number.isNaN(Number.parseFloat(this.amount))) {
      errorAmount = language.pleaseEnterANumber[this.props.language];
    }

    if (!this.amount) {
      this.setState(state => ({
        usd: 0,
        errors: {
          amount: errorAmount,
          address: state.errors.address,
        },
      }));

      return;
    }

    this.setState(state => ({
      usd: Number.parseFloat(this.amount, 10),
      errors: {
        amount: errorAmount,
        address: state.errors.address,
      },
    }));
  }

  render() {
    const price = Number.parseFloat(this.props.wallet.price, 10);

    return (
      <div className={styles.container}>
        <p className={styles.title}>{language.transferNKNTo[this.props.language]}</p>
        <form action="#" onSubmit={this.handleSubmit}>
          <TextLabel>{language.transferToAddress[this.props.language]}</TextLabel>
          <SmallInput
            type="text"
            error={this.state.errors.address}
            inputRef={(c) => { this.address = c; }}
            placeholder={language.transferToAddress[this.props.language]}
          />

          <TextLabel>{language.amount[this.props.language]}</TextLabel>
          <SmallInput
            type="number"
            step="0.0001"
            onChange={this.handleChange}
            error={this.state.errors.amount}
            inputRef={(c) => { this.amount = c; }}
            placeholder={language.howMuchNKNToTransfer[this.props.language]}
          />

          <div className={styles.priceToUSD}>
            <p className={styles.nknPrice}>
              {this.state.usd}
              &nbsp;
              NKN
            </p>

            <img src={equalIcon} alt="Equal" />

            <p className={styles.usdPrice}>
              $
              {(price * this.state.usd).toFixed(2)}
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
