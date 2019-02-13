import { connect } from 'react-redux';
import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import checkInternet from 'Root/actions/other/internet';

import Modal from './tools/Modal';
import Download from './pages/Download';
import Dashboard from './pages/Dashboard';
import OpenWallet from './pages/OpenWallet';
import LoggedRoute from './tools/LoggedRoute';
import CreateWallet from './pages/CreateWallet';
import RestoreWallet from './pages/RestoreWallet';
import NotLoggedRoute from './tools/NotLoggedRoute';

class App extends Component {
  componentWillMount() {
    checkInternet();
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <NotLoggedRoute exact path="/open-wallet" component={OpenWallet} />
            <NotLoggedRoute exact path="/create-wallet" component={CreateWallet} />
            <NotLoggedRoute exact path="/restore-wallet" component={RestoreWallet} />
            <LoggedRoute exact path="/download" component={Download} />
            <LoggedRoute exact path="/dashboard" component={Dashboard} />
            <NotLoggedRoute component={Download} />
          </Switch>
        </Router>

        <Modal visible={this.props.modal.visible}>{this.props.modal.children}</Modal>
      </Fragment>
    );
  }
}

export default connect(state => ({
  modal: state.modal,
}))(App);
