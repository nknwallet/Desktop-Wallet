import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logoutIcon from 'Root/images/logout.png';
import refreshIcon from 'Root/images/refresh.png';
import logoutAction from 'Root/actions/wallet/logout';

import styles from './styles.less';

class Nav extends Component {
  handleLogout = () => {
    logoutAction({
      push: this.props.history.push,
    });
  }

  render() {
    return (
      <div className={styles.navBar}>
        <img src={refreshIcon} alt="Refresh" />

        <p>Block: 000</p>

        <img
          alt="Logout"
          src={logoutIcon}
          onClick={this.handleLogout}
        />
      </div>
    );
  }
}

export default withRouter(Nav);
