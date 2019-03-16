import React from 'react';

import Button from 'Root/components/tools/Button';
import Background from 'Root/components/pages/Background';

import styles from './styles.less';

function Page(props) {
  return (
    <div className={styles.page}>
      <Background />

      <div className={styles.container}>
        <form action="/" method="POST" onSubmit={props.handleSubmit}>
          <p className={styles.title}>{props.title}</p>

          {props.children}

          <div className={styles.links}>
            {props.links}
          </div>

          <Button type="submit">
            {props.buttonTitle}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Page;
