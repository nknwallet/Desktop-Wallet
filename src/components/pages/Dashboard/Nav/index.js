import React from 'react';

import logoutIcon from 'Root/images/logout.png';
import refreshIcon from 'Root/images/refresh.png';

import styles from './styles.less';

function Nav() {
  return (
    <div className={styles.navBar}>
      <img src={refreshIcon} alt="Refresh" />

      <p>Block: 000</p>

      <img src={logoutIcon} alt="Logout" />
    </div>
  );
}

export default Nav;
