import React from 'react';

import styles from './styles.less';

function Button(props) {
  return (
    <button
      className={styles.button}
      type={props.type || 'button'}
      style={{ padding: props.padding || '18px 32px' }}
    >
      {props.children}
    </button>
  );
}

export default Button;
