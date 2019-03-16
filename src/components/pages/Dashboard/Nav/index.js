import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import language from 'Root/helpers/language';
import logoutIcon from 'Root/images/logout.png';
import refreshIcon from 'Root/images/refresh.png';
import logoutAction from 'Root/actions/wallet/logout';
import refreshAction from 'Root/actions/wallet/refresh';

import styles from './styles.less';

class Nav extends Component {
  handleLogout = () => {
    logoutAction({
      push: this.props.history.push,
    });
  }

  handleRefresh = () => {
    refreshAction({
      push: this.props.history.push,
    });
  }

  render() {
    return (
      <div className={styles.navBar}>
        <img
          alt="Refresh"
          src={refreshIcon}
          onClick={this.handleRefresh}
        />

        <p>
          {language.block[this.props.language]}
          :&nbsp;
          {this.props.wallet.block}
        </p>

        <img
          alt="Logout"
          src={logoutIcon}
          onClick={this.handleLogout}
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(Nav));
