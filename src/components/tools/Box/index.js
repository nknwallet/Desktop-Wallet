import React from 'react';

import styles from './styles.less';

function Box(props) {
  return (
    <div
      className={styles.box}
      style={{
        overflowY: 'hidden',
        width: `${props.width}px`,
        height: `${props.height}px`,
        overflowX: props.overflow || 'visible',
      }}
    >
      {props.title && <p className={styles.title}>{props.title}</p>}
      {props.line && <div className={styles.line} />}
      {props.children}
    </div>
  );
}

export default Box;
