
import React from 'react';
import { connect } from 'react-redux';

import Box from 'Root/components/tools/Box';
import language from 'Root/helpers/language';
import Chart from 'Root/components/tools/Chart';

import styles from './styles.less';

function Price(props) {
  return (
    <Box
      line
      width={692}
      height={408}
      title={language.price[props.language]}
    >
      <div className={styles.container}>
        <div className={styles.dollarSign}>
          <p>$</p>
        </div>

        <p className={styles.price}>
          $
          {Number.parseFloat(props.wallet.price, 10).toFixed(4)}
        </p>
      </div>

      <Chart />
    </Box>
  );
}

export default connect(state => ({
  wallet: state.wallet,
  language: state.language,
}))(Price);
