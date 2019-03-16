import { connect } from 'react-redux';
import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import language from 'Root/helpers/language';
import validate from 'Root/helpers/validate';
import Page from 'Root/components/tools/Page';
import TextField from 'Root/components/tools/TextField';
import TextLabel from 'Root/components/tools/TextField/Label';
import restoreWalletAction from 'Root/actions/wallet/restore';

function Links(props) {
  return (
    <Fragment>
      <Link to="/open-wallet">{language.openWallet[props.language]}</Link>
      <Link to="/create-wallet">{language.createWallet[props.language]}</Link>
    </Fragment>
  );
}

class RestoreWallet extends Component {
  state = {
    errors: {
      name: '',
      password: '',
      privateKey: '',
      confirmPassword: '',
    },
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: '',
      password: '',
      privateKey: '',
      confirmPassword: '',
    };

    let hasError = false;

    if (this.name) {
      if (!validate(this.name)) {
        hasError = true;
        errors.name = language.thisFieldIsNotValid[this.props.language];
      }
    }

    if (!this.privateKey) {
      hasError = true;
      errors.privateKey = language.thisFieldIsNotValid[this.props.language];
    }

    if (!validate(this.password)) {
      hasError = true;
      errors.password = language.thisFieldIsNotValid[this.props.language];
    }

    if (!validate(this.confirmPassword)) {
      hasError = true;
      errors.confirmPassword = language.thisFieldIsNotValid[this.props.language];
    }

    if (this.password !== this.confirmPassword) {
      hasError = true;
      errors.confirmPassword = language.passwordAndConfirmNotTheSame[this.props.language];
    }

    this.setState({
      errors: {
        name: errors.name,
        password: errors.password,
        privateKey: errors.privateKey,
        confirmPassword: errors.confirmPassword,
      },
    });

    if (!hasError) {
      restoreWalletAction({
        password: this.password,
        privateKey: this.privateKey,
        name: this.name || 'MyWallet',
        push: this.props.history.push,
      });
    }
  };

  render() {
    return (
      <Page
        handleSubmit={this.handleSubmit}
        links={<Links language={this.props.language} />}
        title={language.restoreWallet[this.props.language].toUpperCase()}
        buttonTitle={language.restore[this.props.language].toUpperCase()}
      >
        <TextLabel>{language.walletName[this.props.language]}</TextLabel>
        <TextField
          type="text"
          error={this.state.errors.name}
          inputRef={(r) => { this.name = r; }}
          placeholder={`${language.eightToTwentyChars[this.props.language]}, ${language.defaultToMyWallet[this.props.language]}`}
        />

        <TextLabel>{language.privateKey[this.props.language]}</TextLabel>
        <TextField
          type="text"
          error={this.state.errors.privateKey}
          inputRef={(r) => { this.privateKey = r; }}
          placeholder={language.yourPrivateKey[this.props.language]}
        />

        <TextLabel>{language.password[this.props.language]}</TextLabel>
        <TextField
          type="password"
          error={this.state.errors.password}
          inputRef={(r) => { this.password = r; }}
          placeholder={language.eightToTwentyChars[this.props.language]}
        />

        <TextLabel>{language.confirmPassword[this.props.language]}</TextLabel>
        <TextField
          type="password"
          error={this.state.errors.confirmPassword}
          inputRef={(r) => { this.confirmPassword = r; }}
          placeholder={language.eightToTwentyChars[this.props.language]}
        />
      </Page>
    );
  }
}

export default withRouter(connect(state => ({
  language: state.language,
}))(RestoreWallet));
