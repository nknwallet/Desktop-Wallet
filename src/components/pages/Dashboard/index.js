import React from 'react';

import Chart from 'Root/components/tools/Chart';

import styles from './styles.less';

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <p>Block: 000</p>
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
