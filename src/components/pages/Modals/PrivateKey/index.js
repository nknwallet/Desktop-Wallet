import { connect } from 'react-redux';
import React, { Component } from 'react';

import eyeOn from 'Root/images/eye-on.svg';
import eyeOff from 'Root/images/eye-off.svg';
import language from 'Root/helpers/language';
import showPrivateKeyAction from 'Root/actions/other/showPrivateKey';

import styles from './styles.less';

class ShowPrivateKey extends Component {
  state = {
    error: '',
    eye: true,
    eyeImg: eyeOn,
    type: 'password',
  }

  handleClick = () => {
    this.setState(state => ({
      eye: !state.eye,
      eyeImg: state.eye ? eyeOff : eyeOn,
      type: state.type === 'password' ? 'text' : 'password',
    }));
  }

  handleShow = () => {
    showPrivateKeyAction({
      password: this.input.value,
      setState: this.setState.bind(this),
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>{language.showingYourPrivateKey[this.props.language]}</p>

        <p className={styles.label}>{language.password[this.props.language]}</p>

        <div className={styles.inputContainer}>
          <input
            type={this.state.type}
            className={styles.input}
            ref={(c) => { this.input = c; }}
            placeholder={language.yourWalletPassword[this.props.language]}
          />

          <img
            alt="Eye"
            className={styles.eye}
            src={this.state.eyeImg}
            onClick={this.handleClick}
          />
        </div>

        <p className={styles.error}>{this.state.error}</p>

        <button
          type="button"
          className={styles.button}
          onClick={this.handleShow}
        >
          {language.show[this.props.language]}
        </button>
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(ShowPrivateKey);
