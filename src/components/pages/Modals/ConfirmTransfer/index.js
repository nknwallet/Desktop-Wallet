import classnames from 'classnames';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import equalIcon from 'Root/images/equal.svg';
import shortHash from 'Root/helpers/shortHash';
import closeModalAction from 'Root/actions/modal/close';
import confirmTransferAction from 'Root/actions/wallet/confirmTransfer';

import styles from './styles.less';

class ConfirmTransfer extends Component {
  handleCancel = () => {
    closeModalAction();
  }

  handleConfirm = () => {
    confirmTransferAction({
      to: this.props.to,
      amount: Number.parseFloat(this.props.amount),
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Confirm Transaction</p>

        <table className={styles.addresses}>
          <tr>
            <td className={styles.key}>From</td>
            <td className={styles.value}>{this.props.wallet.address}</td>
            <td className={styles.valueResponsive}>{shortHash(this.props.wallet.address, 6)}</td>
          </tr>

          <tr>
            <td className={styles.key}>To</td>
            <td className={styles.value}>{this.props.to}</td>
            <td className={styles.valueResponsive}>{shortHash(this.props.to, 6)}</td>
          </tr>
        </table>

        <div className={styles.prices}>
          <div className={styles.send}>
            <p className={styles.key2}>{'You\'ll Send'}</p>
            <p className={styles.value2}>
              {this.props.amount}
              &nbsp;
              NKN
              <img src={equalIcon} className={styles.equalIcon} alt="Equals" />
              &nbsp;
              <span className={styles.dollar}>
                $
                {(Number.parseFloat(this.props.amount) * this.props.price).toFixed(2)}
              </span>
            </p>
          </div>

          <div className={styles.send}>
            <p className={styles.key3}>Transaction Fee</p>
            <p className={styles.value2}>
              {'0'}
              &nbsp;
              NKN
              <img src={equalIcon} className={styles.equalIcon} alt="Equals" />
              &nbsp;
              <span className={styles.dollar}>
                $0
              </span>
            </p>
          </div>

          <div className={styles.line} />

          <div className={styles.send2}>
            <p className={styles.key4}>Total</p>
            <p className={styles.value2}>
              {this.props.amount}
              &nbsp;
              NKN
              <img src={equalIcon} className={styles.equalIcon} alt="Equals" />
              &nbsp;
              <span className={styles.dollar}>
                $
                {(Number.parseFloat(this.props.amount) * this.props.price).toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <div className={styles.pricesResponsive}>
          <div className={styles.send}>
            <p className={styles.key2}>{'You\'ll Send'}</p>
            <p className={styles.value2}>
              {this.props.amount}
              &nbsp;
              NKN
            </p>
          </div>

          <div className={styles.send}>
            <p className={styles.key3}>Transaction Fee</p>
            <p className={styles.value2}>
              {'0'}
              &nbsp;
              NKN
            </p>
          </div>

          <div className={styles.line} />

          <div className={styles.send2}>
            <p className={styles.key4}>Total</p>
            <p className={styles.value2}>
              {this.props.amount}
              &nbsp;
              NKN
            </p>
          </div>
        </div>

        <button
          onClick={this.handleConfirm}
          className={classnames(styles.button, styles.confirm)}
        >
          Confirm
        </button>

        <button
          onClick={this.handleCancel}
          className={classnames(styles.button, styles.cancel)}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  price: state.wallet.price,
  wallet: state.wallet.wallet,
}))(ConfirmTransfer);
