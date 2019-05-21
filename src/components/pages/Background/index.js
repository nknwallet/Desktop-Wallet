import { shell } from 'electron';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import config from 'Root/config.json';
import language from 'Root/helpers/language';
import newLogo from 'Root/images/newLogo.png';
import twitterIcon from 'Root/images/twitter.svg';
import Details from 'Root/components/tools/Details';

import styles from './styles.less';

class Background extends Component {
  openTwitter = () => {
    shell.openExternal(config.twitter);
  }

  render() {
    return (
      <div className={styles.background}>
        <p className={styles.nknName}>NKN</p>
        <p className={styles.walletName}>{language.wallet[this.props.language]}</p>

        <Details />

        <div className={styles.logo} />

        <div className={styles.contact}>
          <p className={styles.email}>
            Contact:
            &nbsp;
            {config.email}
          </p>

          <img src={twitterIcon} alt="Twitter" onClick={this.openTwitter} />
        </div>

        <img src={newLogo} alt="Logo" className={styles.logoWithName} />
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(Background);
