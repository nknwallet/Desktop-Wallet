import { shell } from 'electron';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import config from 'Root/config.json';
import leftArrow from 'Root/images/left-arrow.svg';
import desktopIcon from 'Root/images/desktopPlatform.svg';
import dashboardPhoto from 'Root/images/dashboard-photo.png';

import styles from './styles.less';

class DesktopIntro extends Component {
  handleClick = (e) => {
    e.preventDefault();

    shell.openExternal(config.desktopRelease);
  }

  render() {
    return (
      <div className={styles.container}>
        <Link to="/login">
          <div className={styles.back}>
            <img src={leftArrow} alt="Back" />

            <p>Back</p>
          </div>
        </Link>

        <p className={styles.title}>DESKTOP WALLET</p>

        <div className={styles.info}>
          A cross-platform desktop wallet
        </div>

        <div role="presentation" onClick={this.handleClick} className={styles.button}>
          <img src={desktopIcon} alt="Desktop Icon" />
          <p>Download Desktop Wallet</p>
        </div>

        <img src={dashboardPhoto} alt="Dashboard" className={styles.dashboard} />
      </div>
    );
  }
}

export default DesktopIntro;
