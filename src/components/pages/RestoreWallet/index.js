import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import language from 'Root/helpers/language';
import validate from 'Root/helpers/validate';
import Page from 'Root/components/tools/Page';
import namePattern from 'Root/helpers/namePattern';
import TextField from 'Root/components/tools/TextField';
import TextLabel from 'Root/components/tools/TextField/Label';
import restoreWalletAction from 'Root/actions/wallet/restore';

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
      if (!namePattern(this.name)) {
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
        name: this.name || 'mywallet',
        push: this.props.history.push,
      });
    }
  };

  render() {
    return (
      <Page
        back
        handleSubmit={this.handleSubmit}
        title={language.restoreWallet[this.props.language].toUpperCase()}
        buttonTitle={language.restore[this.props.language].toUpperCase()}
      >
        <TextLabel>{language.walletName[this.props.language]}</TextLabel>
        <TextField
          type="text"
          error={this.state.errors.name}
          inputRef={(r) => { this.name = r; }}
          placeholder={`${language.eightToTwelveChars[this.props.language]}, ${language.defaultToMyWallet[this.props.language]}`}
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
