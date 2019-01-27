import React from 'react';

import Box from 'Root/components/tools/Box';
import Nav from './Nav';

import styles from './styles.less';

function Dashboard() {
  return (
    <div className={styles.container}>
      <Nav />

      <div className={styles.info}>
        <div className={styles.column1}>
          <Box title="Sales" width={891} height={519} line />

          <Box title="Last Transaction" width={890} height={317} />
        </div>

        <div className={styles.column2}>
          <Box width={394} height={119} />

          <Box title="Account" width={395} height={383} line />

          <Box title="Title" width={398} height={324} line />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
