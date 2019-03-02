/* This component is responsible for routing logic */
import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Homepage from '../components/Homepage';
import {connect} from 'react-redux';

import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from '../store/actions/errors';

const Main = props => {
  const {authUser, errors, removeError, currentUser} = props;
  return (
    <div className="container">
      <Switch>
        {/* HOMEPAGE ROUTE */}
        <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
        {/* SIGN IN ROUTE */}
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back!"
                {...props}
              />
            );
          }}
        />
        {/* SIGN OUT ROUTE */}
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign up"
                heading="Join us today!"
                {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter (
    connect (mapStateToProps, {authUser, removeError}) (Main)
    );
