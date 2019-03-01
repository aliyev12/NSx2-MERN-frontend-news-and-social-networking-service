// This component will need react state because of form inputs
import React, {Component} from 'react';

class AuthForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: '',
    };
  }

  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault ();
    // Determine whether there is or there isnt a signup prop passed on to this component.
    // authType variable will be used for determining the type of request that will be made
    const authType = this.props.signUp ? 'signup' : 'signin';
    this.props
      .onAuth (authType, this.state)
      .then (() => console.log ('logged in!'));
  };

  render () {
    const {email, username, password, profileImageUrl} = this.state;
    const {
      heading,
      buttonText,
      signUp,
      errors,
      history,
      removeError,
    } = this.props;

    

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message &&
                <div className="alert alert-danger">{errors.message}</div>}
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
              {/* Syntax below can be interpreted as: of signUp is truthy, then do ahead and do whatever is after && */}
              {signUp &&
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    type="text"
                  />
                  <label htmlFor="image-url">Image URL:</label>
                  <input
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    value={profileImageUrl}
                    type="text"
                  />
                </div>}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
