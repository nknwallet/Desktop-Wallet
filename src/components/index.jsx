import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import OpenWallet from './pages/OpenWallet';
import CreateWallet from './pages/CreateWallet';
import RestoreWallet from './pages/RestoreWallet';
import ProtectedRoute from './tools/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/open-wallet" component={OpenWallet} />
        <Route exact path="/create-wallet" component={CreateWallet} />
        <Route exact path="/restore-wallet" component={RestoreWallet} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
