import React, { Component } from 'react';
import { connect } from 'react-redux';

import language from 'Root/helpers/language';
import Copy from 'Root/components/tools/Copy';
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

        <div className={styles.result2}>
          <div className={styles.text}>
            {this.state.privateKey}
          </div>

          <Copy text={this.state.privateKey} />
        </div>


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
