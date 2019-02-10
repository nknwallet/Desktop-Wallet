import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import Page from 'Root/components/tools/Page';
import TextField from 'Root/components/tools/TextField';
import TextLabel from 'Root/components/tools/TextField/Label';

const links = (
  <Fragment>
    <Link to="/open-wallet">Open Wallet</Link>
    <Link to="/create-wallet">Create Wallet</Link>
  </Fragment>
);

class RestoreWallet extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
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
        <TextField placeholder="8-20 characters, default to MyWallet" type="text" />

        <TextLabel>Private Key</TextLabel>
        <TextField placeholder="Your private key" type="text" />

        <TextLabel>Password</TextLabel>
        <TextField placeholder="8-20 characters" type="password" />

        <TextLabel>Confirm Password</TextLabel>
        <TextField placeholder="8-20 characters" type="password" />
      </Page>
    );
  }
}

export default RestoreWallet;
