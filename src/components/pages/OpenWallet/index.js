import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import language from 'Root/helpers/language';
import Page from 'Root/components/tools/Page';
import openWalletAction from 'Root/actions/wallet/open';
import TextField from 'Root/components/tools/TextField';
import TextLabel from 'Root/components/tools/TextField/Label';

class OpenWallet extends Component {
  state = {
    errors: {
      file: '',
      password: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      file: '',
      password: '',
    };

    let data;
    let hasError;

    if (!this.password) {
      hasError = true;
      errors.password = language.thisFieldIsNotValid[this.props.language];
    }

    if (this.file && this.file.error) {
      hasError = true;
      errors.file = this.file.error;
    }

    try {
      data = JSON.parse(this.file.data);
    } catch (err) {
      hasError = true;
      errors.file = language.fileFormatMustBe[this.props.language];
    }

    this.setState({
      errors: {
        file: errors.file,
        password: errors.password,
      },
    });

    if (!hasError) {
      openWalletAction({
        file: data,
        password: this.password,
        push: this.props.history.push,
        setState: this.setState.bind(this),
      });
    }
  }

  render() {
    return (
      <Page
        back
        handleSubmit={this.handleSubmit}
        buttonTitle={language.open[this.props.language].toUpperCase()}
        title={language.openWallet[this.props.language].toUpperCase()}
      >
        <TextLabel>{language.walletFileToOpen[this.props.language]}</TextLabel>
        <TextField
          required
          type="upload"
          error={this.state.errors.file}
          inputRef={(r) => { this.file = r; }}
          placeholder={language.uploadWalletFile[this.props.language]}
        />

        <TextLabel>{language.password[this.props.language]}</TextLabel>
        <TextField
          type="password"
          error={this.state.errors.password}
          inputRef={(r) => { this.password = r; }}
          placeholder={language.passwordOfTheWalletToOpen[this.props.language]}
        />
      </Page>
    );
  }
}

export default withRouter(connect(state => ({
  language: state.language,
}))(OpenWallet));
