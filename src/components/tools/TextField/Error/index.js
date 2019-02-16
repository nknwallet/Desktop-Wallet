import React from 'react';

import styles from './styles.less';

function Error(props) {
  return (
    <p className={styles.error}>{props.text || ''}</p>
  );
}

export default Error;
