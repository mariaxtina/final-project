import React, {Component} from 'react';

const LoginEmail = React.createClass ({

  getInitialState: function() {
    return {
      new_email: ""
    };
  },

  _onChange: function(event) {
    this.setState({new_email: event.target.value});
  },

  _onEmailBlur: function(event) {
    this.props.onNewEmail(this.state.new_email);
  },

  _onSubmit: function(charCode) {
    console.log(charCode);
    if(charCode === 13) {
      this.props.onNewMessage(this.state.new_email);
    }
  },

  render: function() {
    return (

      <div>

        <nav id="nav-bar">
          <span class="logo">LOGO</span>
        </nav>
        <div>
          <h2 class="center questions">Hi! What's your email?</h2>
          <form>
            <input
              class="center input"
              type="email"
              placeholder="Type your email here."
              onKeyPress={(event)=>this._onSubmit(event.charCode)}
              onBlur={this._onEmailBlur}
              value={this.state.new_email}
              onChange={this._onChange}
            >
            <input class="center button-login-submit button-primary" type="submit" value="Submit">
          </form>
        </div>
      </div>

    );
  }
});

export default LoginEmail;

