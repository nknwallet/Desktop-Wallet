import React from 'react';

import styles from './styles.less';

function Button(props) {
  return (
    <button className={styles.button} type="button">
      {props.children}
    </button>
  );
}

export default Button;
