import { Link } from 'react-router-dom';
import React, { Fragment, Component } from 'react';

import validate from 'Root/helpers/validate';
import createWalletAction from 'Root/actions/wallet/create';

import Page from 'Root/components/tools/Page';
import TextField from 'Root/components/tools/TextField';
import TextLabel from 'Root/components/tools/TextField/Label';

const links = (
  <Fragment>
    <Link to="/restore-wallet">Restore from private key!</Link>
    <Link to="/open-wallet">Open wallet</Link>
  </Fragment>
);

class CreateWallet extends Component {
  state = {
    errors: {
      name: '',
      password: '',
      confirmPassword: '',
    },
  }

  handleSubmit = (e) => {
    const errors = {
      name: '',
      password: '',
      confirmPassword: '',
    };

    let hasError = false;

    e.preventDefault();

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
        confirmPassword: errors.confirmPassword,
      },
    });

    if (!hasError) {
      createWalletAction({
        name: this.name || 'MyWallet',
        password: this.password,
      });
    }
  }

  render() {
    return (
      <Page
        links={links}
        buttonTitle="CREATE"
        title="CREATE NEW WALLET"
        handleSubmit={this.handleSubmit}
      >
        <TextLabel>Wallet name</TextLabel>
        <TextField
          type="text"
          error={this.state.errors.name}
          inputRef={(r) => { this.name = r; }}
          placeholder="8-20 characters, default to MyWallet"
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

export default CreateWallet;
