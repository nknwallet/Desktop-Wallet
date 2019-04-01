import React from 'react';

import newLogo from 'Root/images/newLogo.png';
import Button from 'Root/components/tools/Button';
import Details from 'Root/components/tools/Details';
import Background from 'Root/components/pages/Background';
import LanguageSelect from 'Root/components/tools/LanguageSelect';

import styles from './styles.less';

function Page(props) {
  return (
    <div className={styles.page}>
      <LanguageSelect />

      <div className={styles.background}>
        <Background />
      </div>

      <div className={styles.backgroundResponsive}>
        <img src={newLogo} alt="Logo" className={styles.logoWithName} />

        <p>{props.title}</p>

        <Details paddingLeft="1px" />
      </div>

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
