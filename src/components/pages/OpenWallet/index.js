import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import validate from 'Root/helpers/validate';
import Page from 'Root/components/tools/Page';
import openWalletAction from 'Root/actions/wallet/open';
import TextField from 'Root/components/tools/TextField';
import TextLabel from 'Root/components/tools/TextField/Label';

const links = (
  <Fragment>
    <Link to="/restore-wallet">Restore from private key!</Link>
    <Link to="/create-wallet">Create wallet</Link>
  </Fragment>
);

class OpenWallet extends Component {
  state = {
    errors: {
      upload: '',
      password: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      upload: '',
      password: '',
    };

    let hasError;

    if (!validate(this.password)) {
      hasError = true;
      errors.password = 'This field is not valid.';
    }

    this.setState({
      errors: {
        upload: errors.upload,
        password: errors.password,
      },
    });

    if (!hasError) {
      openWalletAction({
        upload: this.upload,
        password: this.password,
      });
    }
  }

  render() {
    return (
      <Page
        links={links}
        buttonTitle="OPEN"
        title="OPEN WALLET"
        handleSubmit={this.handleSubmit}
      >
        <TextLabel>Wallet file to open</TextLabel>
        <TextField
          required
          type="upload"
          error={this.state.errors.upload}
          placeholder="Upload wallet file"
          inputRef={(r) => { this.upload = r; }}
        />

        <TextLabel>Password</TextLabel>
        <TextField
          type="password"
          error={this.state.errors.password}
          inputRef={(r) => { this.password = r; }}
          placeholder="Password of the wallet to open"
        />

      </Page>
    );
  }
}

export default OpenWallet;
