import React from 'react';
import { connect } from 'react-redux';

import language from 'Root/helpers/language';

import styles from './styles.less';

function Details(props) {
  return (
    <div className={styles.details} style={{ paddingLeft: props.paddingLeft || '62px' }}>
      {language.openSource[props.language]}
      <div className={styles.circle} />
      {language.fast[props.language]}
      <div className={styles.circle} />
      {language.safe[props.language]}
    </div>
  );
}

export default connect(state => ({
  language: state.language,
}))(Details);
