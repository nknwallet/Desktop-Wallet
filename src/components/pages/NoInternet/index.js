import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import noInternetIcon from 'Root/images/nointernet.svg';
import internetAction from 'Root/actions/other/internet';

import styles from './styles.less';

class NoInternet extends Component {
  handleRefresh = () => {
    internetAction({
      push: this.props.history.push,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={noInternetIcon} alt="No Internet" className={styles.noInternet} />

        <p className={styles.title}>Internet not connecting!</p>

        <p className={styles.info}>Please check your connection to internet.</p>

        <button onClick={this.handleRefresh} className={styles.button}>
          Refresh
        </button>
      </div>
    );
  }
}

export default withRouter(NoInternet);
