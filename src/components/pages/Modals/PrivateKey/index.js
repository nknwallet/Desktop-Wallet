import { connect } from 'react-redux';
import React, { Component } from 'react';

import language from 'Root/helpers/language';
import SmallInput from 'Root/components/tools/SmallInput';
import showPrivateKeyAction from 'Root/actions/other/showPrivateKey';

import styles from './styles.less';

class ShowPrivateKey extends Component {
  state = {
    error: '',
  }

  handleShow = (e) => {
    e.preventDefault();

    showPrivateKeyAction({
      password: this.input,
      setState: this.setState.bind(this),
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>{language.showingYourPrivateKey[this.props.language]}</p>

        <p className={styles.label}>{language.password[this.props.language]}</p>

        <form onSubmit={this.handleShow} action="#">
          <SmallInput
            type="password"
            error={this.state.error}
            inputRef={(c) => { this.input = c; }}
            placeholder={language.yourWalletPassword[this.props.language]}
          />

          <button
            type="submit"
            className={styles.button}
          >
            {language.show[this.props.language]}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  language: state.language,
}))(ShowPrivateKey);
