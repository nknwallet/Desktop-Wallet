import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import language from 'Root/helpers/language';

import styles from './styles.less';

function AccessWallet(props) {
  const classes = props.comingsoon
    ? classnames(styles.disabled)
    : classnames(styles.container);

  return (
    <Link to={props.to}>
      <div className={classes}>
        <div className={styles.icon}>
          <img src={props.icon} alt="Icon" />
        </div>

        <p className={styles.title}>{props.title}</p>

        <p className={styles.description}>{props.description}</p>

        {props.comingsoon
        && (
          <p className={styles.comingsoon}>{language.comingSoon[props.language]}</p>
        )}
      </div>
    </Link>
  );
}

export default connect(state => ({
  language: state.language,
}))(AccessWallet);
