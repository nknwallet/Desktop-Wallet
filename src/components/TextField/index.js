import React from 'react';

import styles from './styles.less';

function TextField(props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder={props.placeholder}
      />

      {props.invisible && <span className={styles.invisible}>aa</span>}
    </div>
  );
}

export default TextField;
