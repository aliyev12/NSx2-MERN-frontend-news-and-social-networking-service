// Navbar will be placed inside containers because it will be connected to redux store and it changes if a user is authenticated
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="#" alt="News and Social Networking Service - Home"/>
                    </Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/signup">
                            Sign up
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin">
                            Sign in
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);