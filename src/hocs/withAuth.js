// This higher order components (hocs) will handle validation
// to make sure that user is logged in before seeing a specific component, otherwise take them somewhere else

import React, {Component} from 'react';
// Need to connect to redux store to see if that user is authenticated
import {connect} from 'react-redux';

// This function simply renderes a class and returns another component
export default function withAuth (ComponentToBeRendered) {
  class Authenticate extends Component {
    // Before a component even mounts, if user is not authenticated, she will be redirected to signin page
    componentWillMount () {
      if (!this.props.isAuthenticated) {
        this.props.history.push ('/signin');
      }
    }

    // If there is any kind of state change (redux or react), this likecycle method will be trigered
    // If any of the next props that component is getting, they are still NOT authenticated then redirect to signin page
    componentWillUpdate (nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push ('/signin');
      }
    }

    render () {
      return <ComponentToBeRendered {...this.props} />;
    }
  }

  function mapStateToProps (state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
    };
  }

  return connect (mapStateToProps) (Authenticate);
}
