import React from 'react';

import styles from './styles.less';

function Label(props) {
  return (
    <p className={styles.textLabel}>{props.children}</p>
  );
}

export default Label;
