import React, { Fragment, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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

    if (!validate(this.password)) {
      hasError = true;
      errors.password = 'This field is not valid.';
    }

    if (this.file && this.file.error) {
      hasError = true;
      errors.file = this.file.error;
    }

    try {
      data = JSON.parse(this.file.data);
    } catch (err) {
      hasError = true;
      errors.file = 'File format must be JSON or DAT.';
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
        links={links}
        buttonTitle="OPEN"
        title="OPEN WALLET"
        handleSubmit={this.handleSubmit}
      >
        <TextLabel>Wallet file to open</TextLabel>
        <TextField
          required
          type="upload"
          error={this.state.errors.file}
          placeholder="Upload wallet file"
          inputRef={(r) => { this.file = r; }}
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

export default withRouter(OpenWallet);
