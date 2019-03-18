import React from 'react';
import { connect } from 'react-redux';

import language from 'Root/helpers/language';
import newLogo from 'Root/images/newLogo.png';
import Details from 'Root/components/tools/Details';

import styles from './styles.less';

function Background(props) {
  return (
    <div className={styles.background}>
      <p className={styles.nknName}>NKN</p>
      <p className={styles.walletName}>{language.wallet[props.language]}</p>

      <Details />

      <div className={styles.logo} />

      <img src={newLogo} alt="Logo" className={styles.logoWithName} />
    </div>
  );
}

export default connect(state => ({
  language: state.language,
}))(Background);
