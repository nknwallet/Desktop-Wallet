import React from 'react';
import { Link } from 'react-router-dom';

import newLogo from 'Root/images/newLogo.png';
import Button from 'Root/components/tools/Button';
import Details from 'Root/components/tools/Details';
import leftArrow from 'Root/images/left-arrow.svg';
import phoneIcon from 'Root/images/phonePlatform.svg';
import Platform from 'Root/components/tools/Platform';
import Background from 'Root/components/pages/Background';
import browserIcon from 'Root/images/browserPlatform.svg';
import desktopIcon from 'Root/images/desktopPlatform.svg';
import LanguageSelect from 'Root/components/tools/LanguageSelect';

import styles from './styles.less';

function Page(props) {
  return (
    <div className={styles.page}>
      <LanguageSelect />

      <div className={styles.background}>
        <Background />
      </div>

      <div className={styles.backgroundResponsive}>
        <img src={newLogo} alt="Logo" className={styles.logoWithName} />

        <p>{props.title}</p>

        <Details paddingLeft="1px" />
      </div>

      <div className={styles.container}>
        {props.back
        && (
          <Link to="/login">
            <div className={styles.back}>
              <img src={leftArrow} alt="Back" />

              <p>Back</p>
            </div>
          </Link>
        )}

        <div className={styles.formContainer}>
          <form action="/" method="POST" onSubmit={props.handleSubmit}>
            <p className={styles.title}>{props.title}</p>

            {props.children}

            {props.buttonTitle
              && (
                <Button type="submit">
                  {props.buttonTitle}
                </Button>
              )
            }
          </form>
        </div>

        <div className={styles.footer}>
          <Platform
            icon={phoneIcon}
            title="Phone Wallet"
          />

          <Platform
            icon={desktopIcon}
            to="/desktop-intro"
            title="Desktop Wallet"
          />

          <Platform
            icon={browserIcon}
            title="Browser Wallet"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
