import React from 'react';
import { connect } from 'react-redux';

import language from 'Root/helpers/language';

import styles from './styles.less';

function ComingSoon(props) {
  return (
    <div className={styles.container}>
      <p>{language.comingSoon[props.language]}</p>
    </div>
  );
}

export default connect(state => ({
  language: state.language,
}))(ComingSoon);
