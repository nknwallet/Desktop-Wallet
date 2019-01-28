import React from 'react';

import styles from './styles.less';

function Button(props) {
  return (
    <button
      type="button"
      className={styles.button}
      style={{ padding: props.padding || '18px 32px' }}
    >
      {props.children}
    </button>
  );
}

export default Button;
