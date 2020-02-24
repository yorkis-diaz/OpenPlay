import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';
import GreetingMenu from '../greeting/greeting_menu';
import ErrorItem from './errors/error_item';

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  };

  componentDidMount () {
    this.props.clearErrors();
  }

  demoUser (e) {
    e.preventDefault();
    this.props.login({
      email: "johndoe@gmail.com",
      password: "johndoe"
    }).then(() => {
      this.props.closeModal()
    });
  }
  
  handleSubmit (e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state)
    this.props.login(user).then(() => {
      this.props.closeModal()
    });
    this.setState({
      email: "",
      password: ""
    })
  }

  handleUpdate (value) {
    return (e) => {
      this.setState({
        [value]: e.target.value
      });
    };

  };

  render () {
    let error;
    if (this.props.errors.length > 0) {
      error = < ErrorItem 
        error={true} 
        message={this.props.errors[0]}
        style={"error-item"}
      />
    }
    return (
      <div className="form-container">
        <h1>Please sign in</h1>

        <form onSubmit={this.handleSubmit}>
          {error}
          <label>
            <input
              type="email"
              onChange={this.handleUpdate("email")}
              placeholder="Email"
              value={this.state.email}
            />
          </label>
          <label>
            <input
              type="password"
              onChange={this.handleUpdate("password")}
              placeholder="Password"
              value={this.state.password}
            />
          </label>
          <Link to="#">Forgot Password?</Link>
          <button className="signin-btn">Sign In</button>
          <hr />
          <button className="demo-user-btn" onClick={this.demoUser}>
            Demo User
          </button>
        </form>
        <p>New to OpenPlay? {this.props.signupForm}</p>
      </div>
    );
  }
}

export default LoginForm;