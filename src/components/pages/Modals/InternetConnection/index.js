import React, { Component } from 'react';

import errorIcon from 'Root/images/error.svg';
import Button from 'Root/components/tools/Button';
import retryConnection from 'Root/actions/modal/retryConnection';

import styles from './styles.less';

class InternetConnection extends Component {
  handleClick = () => {
    retryConnection();
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={errorIcon} alt="Error" />
        <p className={styles.errorTitle}>ERROR</p>
        <p className={styles.errorText}>No internet connection detected.</p>

        <Button onClick={this.handleClick}>Try Again</Button>
      </div>
    );
  }
}

export default InternetConnection;
