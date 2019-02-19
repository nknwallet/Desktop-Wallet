import React, { Component } from 'react';

import styles from './styles.less';

class ShowPrivateKey extends Component {
  handleShow = () => {
    console.log(this.input.value);
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Showing private key of your wallet</p>

        <p className={styles.label}>Password</p>

        <input
          type="text"
          className={styles.input}
          ref={(c) => { this.input = c; }}
          placeholder="Your wallet password"
        />

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
