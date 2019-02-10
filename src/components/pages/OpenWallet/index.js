import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import Page from 'Root/components/tools/Page';
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
    error: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
          placeholder="Upload wallet file"
        />

        <TextLabel>Password</TextLabel>
        <TextField
          type="password"
          error={this.state.error}
          placeholder="Password of the wallet to open"
        />

      </Page>
    );
  }
}

export default OpenWallet;
