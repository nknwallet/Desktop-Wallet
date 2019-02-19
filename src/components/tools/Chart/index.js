import React from 'react';
import Chart from 'chart.js';
import ReactChartkick, { LineChart } from 'react-chartkick';

import styles from './styles.less';

ReactChartkick.addAdapter(Chart);

function ChartComponent() {
  return (
    <div className={styles.container}>
      <LineChart
        data={{
          '2017-05-13': 2,
          '2017-05-14': 5,
        }}
      />
    </div>
  );
}

export default ChartComponent;
