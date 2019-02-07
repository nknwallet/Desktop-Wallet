import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function NotLoggedRoute(props) {
  if (props.token.logged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route {...props} />
  );
}

export default connect(state => ({
  token: state.token,
}))(NotLoggedRoute);
