import React from 'react';

import styles from './styles.less';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.button}
      type={props.type || 'button'}
      style={{ padding: props.padding || '14px 24px' }}
    >
      {props.children}
    </button>
  );
}

export default Button;
