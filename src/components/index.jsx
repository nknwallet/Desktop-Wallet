import { connect } from 'react-redux';
import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';

import Modal from './tools/Modal';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Download from './pages/Download';
import Dashboard from './pages/Dashboard';
import NoInternet from './pages/NoInternet';
import OpenWallet from './pages/OpenWallet';
import LoggedRoute from './tools/LoggedRoute';
import DesktopIntro from './pages/DesktopIntro';
import CreateWallet from './pages/CreateWallet';
import RestoreWallet from './pages/RestoreWallet';
import NotLoggedRoute from './tools/NotLoggedRoute';

class App extends Component {
  componentWillMount() {
    if (!this.props.internet) {
      this.props.history.push('/no-internet');
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <NotLoggedRoute exact path="/login" component={Login} />
            <NotLoggedRoute exact path="/open-wallet" component={OpenWallet} />
            <NotLoggedRoute exact path="/create-wallet" component={CreateWallet} />
            <NotLoggedRoute exact path="/restore-wallet" component={RestoreWallet} />
            <NotLoggedRoute exact path="/no-internet" component={NoInternet} />
            <NotLoggedRoute exact path="/desktop-intro" component={DesktopIntro} />
            <LoggedRoute exact path="/loading" component={Loading} />
            <LoggedRoute exact path="/download" component={Download} />
            <LoggedRoute exact path="/dashboard" component={Dashboard} />
            <LoggedRoute component={Loading} />
          </Switch>
        </Router>

        <Modal
          width={this.props.modal.width}
          height={this.props.modal.height}
          visible={this.props.modal.visible}
          animation={this.props.modal.animation}
          showCloseButton={this.props.modal.showCloseButton}
        >
          {this.props.modal.children}
        </Modal>
      </Fragment>
    );
  }
}

export default withRouter(connect(state => ({
  modal: state.modal,
  internet: state.internet,
}))(App));
