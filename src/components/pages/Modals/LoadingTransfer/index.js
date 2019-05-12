import React from 'react';

import styles from './styles.less';

function LoadingTransfer() {
  return (
    <div className={styles.load}>
      <div className={styles.load__iconWrap}>
        <svg className={styles.load__icon}>
          <path fill="#5093e4" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
        </svg>
      </div>
    </div>
  );
}

export default LoadingTransfer;
