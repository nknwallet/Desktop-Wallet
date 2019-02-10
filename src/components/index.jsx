import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Modal from './tools/Modal';
import Dashboard from './pages/Dashboard';
import OpenWallet from './pages/OpenWallet';
import LoggedRoute from './tools/LoggedRoute';
import CreateWallet from './pages/CreateWallet';
import RestoreWallet from './pages/RestoreWallet';
import NotLoggedRoute from './tools/NotLoggedRoute';

function App(props) {
  return (
    <Fragment>
      <Router>
        <Switch>
          <NotLoggedRoute exact path="/open-wallet" component={OpenWallet} />
          <NotLoggedRoute exact path="/create-wallet" component={CreateWallet} />
          <NotLoggedRoute exact path="/restore-wallet" component={RestoreWallet} />
          <LoggedRoute exact path="/dashboard" component={Dashboard} />
          <LoggedRoute component={Dashboard} />
        </Switch>
      </Router>

      <Modal visible={props.modal.visible}>{props.modal.children}</Modal>
    </Fragment>
  );
}

export default connect(state => ({
  modal: state.modal,
}))(App);
