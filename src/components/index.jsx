import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import OpenWallet from './pages/OpenWallet';
import LoggedRoute from './tools/LoggedRoute';
import CreateWallet from './pages/CreateWallet';
import RestoreWallet from './pages/RestoreWallet';
import NotLoggedRoute from './tools/NotLoggedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <NotLoggedRoute exact path="/open-wallet" component={OpenWallet} />
        <NotLoggedRoute exact path="/create-wallet" component={CreateWallet} />
        <NotLoggedRoute xact path="/restore-wallet" component={RestoreWallet} />
        <LoggedRoute exact path="/dashboard" component={Dashboard} />
        <LoggedRoute component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
