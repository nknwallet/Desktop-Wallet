import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.less';

function AccessWallet(props) {
  return (
    <Link to={props.to}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img src={props.icon} alt="Icon" />
        </div>

        <p className={styles.title}>{props.title}</p>

        <p className={styles.description}>{props.description}</p>

        {props.comingsoon
        && (
          <p className={styles.comingsoon}>Coming Soon!</p>
        )}
      </div>
    </Link>
  );
}

export default AccessWallet;
