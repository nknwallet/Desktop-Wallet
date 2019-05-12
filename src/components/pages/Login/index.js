import React from 'react';

import openWalletIcon from 'Root/images/openWallet.svg';
import createWalletIcon from 'Root/images/createWallet.svg';
import ledgerWalletIcon from 'Root/images/ledgerWallet.png';
import restoreWalletIcon from 'Root/images/restoreWallet.svg';
import browserWalletIcon from 'Root/images/browserWallet.svg';

import Page from 'Root/components/tools/Page';
import AccessWallet from 'Root/components/tools/AccessWallet';

function Login() {
  return (
    <Page
      title="How would you like to access your wallet?"
    >
      <AccessWallet
        to="/create-wallet"
        title="Create Wallet"
        icon={createWalletIcon}
        description="Create a new wallet"
      />

      <AccessWallet
        to="/open-wallet"
        title="Open Wallet"
        icon={openWalletIcon}
        description="Open with a .dat file"
      />

      <AccessWallet
        to="/restore-wallet"
        title="Restore Wallet"
        icon={restoreWalletIcon}
        description="Restore by private key"
      />

      <AccessWallet
        comingsoon
        to="/browser-wallet"
        title="Browser Wallet"
        icon={browserWalletIcon}
        description="Connect via browser or extension"
      />

      <AccessWallet
        comingsoon
        title="Ledger"
        to="/ledger-wallet"
        icon={ledgerWalletIcon}
        description="Connect via ledger"
      />
    </Page>
  );
}

export default Login;
