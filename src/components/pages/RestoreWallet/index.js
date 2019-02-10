import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import validate from 'Root/helpers/validate';
import Page from 'Root/components/tools/Page';
import TextField from 'Root/components/tools/TextField';
import TextLabel from 'Root/components/tools/TextField/Label';
import restoreWalletAction from 'Root/actions/wallet/restore';

const links = (
  <Fragment>
    <Link to="/open-wallet">Open Wallet</Link>
    <Link to="/create-wallet">Create Wallet</Link>
  </Fragment>
);

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
        errors.name = 'This field is not valid';
      }
    }

    if (!validate(this.password)) {
      hasError = true;
      errors.password = 'This field is not valid';
    }

    if (!validate(this.confirmPassword)) {
      hasError = true;
      errors.confirmPassword = 'This field is not valid';
    }

    if (this.password !== this.confirmPassword) {
      hasError = true;
      errors.confirmPassword = 'Password and confirm password are not the same!';
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
        name: this.name,
        password: this.password,
        privateKey: this.privateKey,
      });
    }
  };

  render() {
    return (
      <Page
        links={links}
        buttonTitle="RESTORE"
        title="RESTORE WALLET"
        handleSubmit={this.handleSubmit}
      >
        <TextLabel>Wallet name</TextLabel>
        <TextField
          type="text"
          error={this.state.errors.name}
          inputRef={(r) => { this.name = r; }}
          placeholder="8-20 characters, default to MyWallet"
        />

        <TextLabel>Private Key</TextLabel>
        <TextField
          type="text"
          placeholder="Your private key"
          error={this.state.errors.privateKey}
          inputRef={(r) => { this.privateKey = r; }}
        />

        <TextLabel>Password</TextLabel>
        <TextField
          type="password"
          placeholder="8-20 characters"
          error={this.state.errors.password}
          inputRef={(r) => { this.password = r; }}
        />

        <TextLabel>Confirm Password</TextLabel>
        <TextField
          type="password"
          placeholder="8-20 characters"
          error={this.state.errors.confirmPassword}
          inputRef={(r) => { this.confirmPassword = r; }}
        />
      </Page>
    );
  }
}

export default RestoreWallet;
