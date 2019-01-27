import React from 'react';
import { Line } from 'react-chartjs-2';

import styles from './styles.less';

function Chart() {
  return (
    <div className={styles.container}>
      <Line
        width={801}
        height={371}
      />
    </div>
  );
}

export default Chart;
