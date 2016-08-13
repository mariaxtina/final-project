import React, {Component} from 'react';
import Login from './Login.jsx';
import Nav from './Nav.jsx';
import App from './App.jsx';

const LoginEmail = React.createClass ({

  nextStep: function(e) {
    e.preventDefault()
    let data = {
      email: this.refs.email.value,
    }
    this.props.validateEmailLogin(data)
    this.props.nextStep()
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your email?</h2>
        <form>
          <input
            className="center input"
            type="email"
            id="email"
            ref="email"
            placeholder="Type your email here."
            defaultValue={this.props.user.email} />
          <input
            className="center button-login-submit button-primary"
            type="submit"
            onClick={this.nextStep}
            onSubmit={this.nextStep}
            value="Next" />
        </form>
      </div>
    );
  }
});

export default LoginEmail;
