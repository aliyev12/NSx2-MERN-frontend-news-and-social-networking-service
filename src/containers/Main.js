/* This component is responsible for routing logic */
import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Homepage from "../components/Homepage";
import {connect} from 'react-redux';

import AuthForm from '../components/AuthForm';

const Main = props => {
  return (
    <div className="container">
      <Switch>
        {/* HOMEPAGE ROUTE */}
        <Route exact path="/" render={props => <Homepage {...props} />} />
        {/* SIGN IN ROUTE */}
        <Route exact path="/signin" render={props => {
          return (
            <AuthForm buttonText="Log in" heading="Welcome Back!" {...props} />
          )
        }} />
        {/* SIGN OUT ROUTE */}
        <Route exact path="/signup" render={props => {
          return (
            < AuthForm buttonText="Sign up" heading="Join us today!" {...props} />
          )
        }} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, null)(Main));