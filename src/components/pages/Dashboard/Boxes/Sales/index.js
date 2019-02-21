import React from 'react';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';
import Chart from 'Root/components/tools/Chart';

import styles from './styles.less';

function Sales(props) {
  return (
    <Box title="Sales" width={891} height={519} line>
      <div className={styles.container}>
        <div className={styles.dollarSign}>
          <p>$</p>
        </div>

        <p className={styles.price}>
          $
          {props.wallet.price}
        </p>
      </div>
      <Chart />
    </Box>
  );
}

export default connect(state => ({
  wallet: state.wallet,
}))(Sales);
