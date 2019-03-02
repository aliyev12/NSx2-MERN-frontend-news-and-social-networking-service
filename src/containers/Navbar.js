// Navbar will be placed inside containers because it will be connected to redux store and it changes if a user is authenticated
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../store/actions/auth';
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
  render() {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="News and Social Networking Service - Home" />
            </Link>
          </div>
          {/* If a used is authenticated, then only show a message and logout link */}
          {this.props.currentUser.isAuthenticated ? (
             <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                </li>
                <li>
                    <a onClick={this.logout}>Log out</a>
                </li>
             </ul> 
          ) : 
            /* If user is not authenticated, then show the Sign Up and Sign In links, and no message */
          (<ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
          </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  {logout}
)(Navbar);
