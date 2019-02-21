import React, { Component } from 'react';

import eyeOn from 'Root/images/eye-on.svg';
import eyeOff from 'Root/images/eye-off.svg';
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
        <p className={styles.title}>Showing private key of your wallet</p>

        <p className={styles.label}>Password</p>

        <div className={styles.inputContainer}>
          <input
            type={this.state.type}
            className={styles.input}
            ref={(c) => { this.input = c; }}
            placeholder="Your wallet password"
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
          Show
        </button>
      </div>
    );
  }
}

export default ShowPrivateKey;
