import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classnames(styles.button, styles[props.color])}
    >
      {props.children}
    </button>
  );
}

export default Button;
