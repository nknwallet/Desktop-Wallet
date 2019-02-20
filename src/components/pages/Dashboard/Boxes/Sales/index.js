import React from 'react';

import Box from 'Root/components/tools/Box';
import Chart from 'Root/components/tools/Chart';

import styles from './styles.less';

function Sales() {
  return (
    <Box title="Sales" width={891} height={519} line>
      <div className={styles.container}>
        <div className={styles.dollarSign}>
          <p>$</p>
        </div>

        <p className={styles.price}>$185.415</p>
      </div>
      <Chart />
    </Box>
  );
}

export default Sales;
