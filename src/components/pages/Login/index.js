import React from 'react';
import { connect } from 'react-redux';

import language from 'Root/helpers/language';
import openWalletIcon from 'Root/images/openWallet.svg';
import createWalletIcon from 'Root/images/createWallet.svg';
import ledgerWalletIcon from 'Root/images/ledgerWallet.png';
import restoreWalletIcon from 'Root/images/restoreWallet.svg';
// import browserWalletIcon from 'Root/images/browserWallet.svg';

import Page from 'Root/components/tools/Page';
import AccessWallet from 'Root/components/tools/AccessWallet';

function Login(props) {
  return (
    <Page
      title={language.howWouldYouLikeToAccessYourWallet[props.language]}
    >
      <AccessWallet
        to="/create-wallet"
        icon={createWalletIcon}
        title={language.createWallet[props.language]}
        description={language.createNewWallet[props.language]}
      />

      <AccessWallet
        to="/open-wallet"
        icon={openWalletIcon}
        title={language.openWallet[props.language]}
        description={language.openWithDatFile[props.language]}
      />

      <AccessWallet
        to="/restore-wallet"
        icon={restoreWalletIcon}
        title={language.restoreWallet[props.language]}
        description={language.restoreFromPrivateKey[props.language]}
      />

      {/* <AccessWallet
        comingsoon
        to="/browser-wallet"
        icon={browserWalletIcon}
        title={language.extensionWallet[props.language]}
        description={language.connectViaExtension[props.language]}
      /> */}

      <AccessWallet
        comingsoon
        to="/ledger-wallet"
        icon={ledgerWalletIcon}
        title={language.ledger[props.language]}
        description={language.connectViaLedger[props.language]}
      />
    </Page>
  );
}

export default connect(state => ({
  language: state.language,
}))(Login);
