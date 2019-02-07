import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function LoggedRoute(props) {
  if (!props.token.logged) {
    return <Redirect to="/restore-wallet" />;
  }

  return (
    <Route {...props} />
  );
}

export default connect(state => ({
  token: state.token,
}))(LoggedRoute);
