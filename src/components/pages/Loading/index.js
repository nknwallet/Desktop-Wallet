import React from 'react';

import loadingIcon from 'Root/images/Loading.gif';

import styles from './styles.less';

function Loading() {
  return (
    <div>
      <img
        src={loadingIcon}
        alt="Loading Icon"
        className={styles.icon}
      />

      <p className={styles.text}>Loading ...</p>
    </div>
  );
}

export default Loading;
