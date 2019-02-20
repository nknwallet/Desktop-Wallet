import React from 'react';

import failureIcon from 'Root/images/error.svg';
import successfulIcon from 'Root/images/successful.svg';

import styles from './styles.less';

function SuccessfulTransfer(props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        alt="Successful Transaction"
        src={props.failure ? failureIcon : successfulIcon}
      />

      <p className={styles.title}>
        {props.failure ? 'ERROR' : 'Successful Sending'}
      </p>

      <p className={styles.hash}>{!props.failure && props.hash}</p>
    </div>
  );
}

export default SuccessfulTransfer;
