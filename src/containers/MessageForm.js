import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postNewMessage} from '../store/actions/messages';

class MessageForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
      message: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  handleNewMessage = event => {
    event.preventDefault ();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: '' });
    this.props.history.push('/');
  };

  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render () {
    return (
      <form onSubmit={this.handleNewMessage}>
        {this.props.errors.message &&
          <div className="alert alert-danger">
            {this.props.errors.message}
          </div>}
        <input
          type="text"
          name="message"
          className="form-control"
          value={this.state.message}
          onChange={this.onChange}
        />
        <button type="submit" className="btn btn-success float-right">
            Add my message
        </button>
      </form>
    );
  }
}

function mapStateToProps (state) {
  return {
    errors: state.errors,
  };
}

export default connect (mapStateToProps, {postNewMessage}) (MessageForm);
