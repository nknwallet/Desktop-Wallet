import React, { Component } from 'react';

import showPrivateKeyAction from 'Root/actions/other/showPrivateKey';

import styles from './styles.less';

class ShowPrivateKey extends Component {
  state = {
    error: '',
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

        <input
          type="password"
          className={styles.input}
          ref={(c) => { this.input = c; }}
          placeholder="Your wallet password"
        />

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
