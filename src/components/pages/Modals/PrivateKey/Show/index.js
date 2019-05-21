import React, { Component } from 'react';
import { connect } from 'react-redux';

import copyText from 'Root/helpers/copy';
import copyIcon from 'Root/images/copy.svg';
import language from 'Root/helpers/language';
import closeModalAction from 'Root/actions/modal/close';
import privateKeyIcon from 'Root/images/privateKey.svg';

import styles from './styles.less';

class Show extends Component {
  state = {
    privateKey: this.props.wallet.wallet.getSeed(),
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
        <div className={styles.result}>
          <img
            alt="Icon"
            src={privateKeyIcon}
            className={styles.icon}
          />

          <p className={styles.title}>
            {language.yourPrivateKey[this.props.language]}
          </p>
        </div>

        <p className={styles.text}>
          {this.state.privateKey}
        </p>

        <img
          alt="Copy"
          src={copyIcon}
          className={styles.icon}
          onClick={this.handleCopy}
        />

        <p />

        <button type="button" onClick={this.handleClick} className={styles.button}>
          {language.ok[this.props.language]}
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(Show);
