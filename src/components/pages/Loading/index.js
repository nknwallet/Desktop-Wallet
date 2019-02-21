import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import loadingIcon from 'Root/images/Loading.gif';
import loadDashboard from 'Root/actions/wallet/loadDashboard';

import styles from './styles.less';

class Loading extends Component {
  componentDidMount() {
    loadDashboard({
      push: this.props.history.push,
    });
  }

  render() {
    return (
      <div>
        <img
          src={loadingIcon}
          alt="Loading Icon"
          className={styles.icon}
        />
      </div>
    );
  }
}

export default withRouter(Loading);
