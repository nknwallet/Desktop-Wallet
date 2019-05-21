import { shell } from 'electron';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import config from 'Root/config.json';
import newLogo from 'Root/images/newLogo.png';
import Button from 'Root/components/tools/Button';
import Details from 'Root/components/tools/Details';
import leftArrow from 'Root/images/left-arrow.svg';
import phoneIcon from 'Root/images/phonePlatform.svg';
import Platform from 'Root/components/tools/Platform';
import Background from 'Root/components/pages/Background';
import browserIcon from 'Root/images/browserPlatform.svg';
import desktopIcon from 'Root/images/desktopPlatform.svg';
import comingSoonModal from 'Root/actions/modal/comingSoon';
import LanguageSelect from 'Root/components/tools/LanguageSelect';

import styles from './styles.less';

class Page extends Component {
  openBrowserWallet = () => {
    shell.openExternal(config.website);
  }

  openComingSoonModal = () => {
    comingSoonModal();
  }

  render() {
    return (
      <div className={styles.page}>
        <LanguageSelect />

        <div className={styles.background}>
          <Background />
        </div>

        <div className={styles.backgroundResponsive}>
          <img src={newLogo} alt="Logo" className={styles.logoWithName} />

          <p>{this.props.title}</p>

          <Details paddingLeft="1px" />
        </div>

        <div className={styles.container}>
          {this.props.back
            && (
              <Link to="/login">
                <div className={styles.back}>
                  <img src={leftArrow} alt="Back" />

                  <p>Back</p>
                </div>
              </Link>
            )}

          <div className={styles.formContainer}>
            <form action="/" method="POST" onSubmit={this.props.handleSubmit}>
              <p className={styles.title}>{this.props.title}</p>

              {this.props.children}

              {this.props.buttonTitle
                && (
                  <Button type="submit">
                    {this.props.buttonTitle}
                  </Button>
                )
              }
            </form>
          </div>

          <div className={styles.footer}>
            <Platform
              icon={phoneIcon}
              title="Phone Wallet"
              onClick={this.openComingSoonModal}
            />

            <Platform
              icon={desktopIcon}
              to="/desktop-intro"
              title="Desktop Wallet"
            />

            <Platform
              icon={browserIcon}
              title="Browser Wallet"
              onClick={this.openBrowserWallet}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
