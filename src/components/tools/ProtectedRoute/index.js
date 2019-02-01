import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
  if (!props.user.logged) {
    return <Redirect to="/restore-wallet" />;
  }

  return (
    <Route {...props} />
  );
}

export default connect(state => ({
  user: state.user,
}))(ProtectedRoute);
