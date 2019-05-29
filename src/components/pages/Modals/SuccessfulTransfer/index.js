import { shell } from 'electron';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import config from 'Root/config.json';
import language from 'Root/helpers/language';
import failureIcon from 'Root/images/error.png';
import closeModalAction from 'Root/actions/modal/close';
import successfulIcon from 'Root/images/successful.svg';

import styles from './styles.less';

class SuccessfulTransfer extends Component {
  handleClick = () => {
    closeModalAction();
  }

  handleClickHash = (e) => {
    e.preventDefault();

    shell.openExternal(`${config.transaction}/${this.props.hash}`);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.result}>
          <img
            className={styles.icon}
            alt="Successful Transaction"
            src={this.props.failure ? failureIcon : successfulIcon}
          />

          <p className={styles.title}>
            {this.props.failure
              ? language.error[this.props.language]
              : language.transactionSent[this.props.language]
            }
          </p>
        </div>

        <a
          className={styles.hash}
          href="https://google.com"
          onClick={this.handleClickHash}
        >
          {!this.props.failure && this.props.hash}
        </a>

        <p />

        <button type="button" onClick={this.handleClick} className={styles.button}>
          {language.ok[this.props.language]}
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(SuccessfulTransfer);
