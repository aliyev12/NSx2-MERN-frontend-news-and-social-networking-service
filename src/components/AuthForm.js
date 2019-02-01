// This component will need react state because of form inputs
import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''
        };
    }
    
    
    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, buttonText } = this.props;
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            <label htmlFor="email">Email: </label>
                            <input 
                                onChange={this.handleChange}
                                value={email}
                                className="form-control" 
                                id="email" 
                                type="text" 
                                name="email"
                            />
                            <label htmlFor="password">Password:</label>
                            <input 
                                onChange={this.handleChange}
                                className="form-control"
                                type="password"
                                id="password"
                                name="password"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;
