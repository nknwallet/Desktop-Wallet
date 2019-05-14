import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.less';

function Platform(props) {
  return (
    <Link to={props.to || '#'}>
      <div className={styles.container} onClick={props.onClick} role="presentation">
        <img src={props.icon} alt="Icon" />

        <p>{props.title}</p>
      </div>
    </Link>
  );
}

export default Platform;
