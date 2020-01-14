import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';
import ErrorItem from './errors/error_item';

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: ""
    }

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.clearErrors();
  }
  
  handleSubmit (e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state)
    this.props.signup(user).then(() => {
      this.props.closeModal()
    });
    this.setState({
      email: "",
      firstname: "",
      lastname: "",
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
    return (
      <div className="form-container">
        <h1>Welcome to OpenPlay!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              onChange={this.handleUpdate("firstname")}
              placeholder="First Name*"
              value={this.state.firstname}
            />
          </label>
          <ErrorItem
            error={this.props.errors.firstName}
            message={"Enter your first name"}
            style={"error-item"}
          />
          <label>
            <input
              type="text"
              onChange={this.handleUpdate("lastname")}
              placeholder="Last Name*"
              value={this.state.lastname}
            />
          </label>
          <ErrorItem
            error={this.props.errors.lastName}
            message={"Enter your last name"}
            style={"error-item"}
          />

          <label>
            <input
              type="email"
              onChange={this.handleUpdate("email")}
              placeholder="Enter email*"
              value={this.state.email}
            />
          </label>
          <ErrorItem
            error={this.props.errors.email}
            message={"Enter your email"}
            style={"error-item"}
          />
          <label>
            <input
              type="password"
              onChange={this.handleUpdate("password")}
              placeholder="Enter password*"
              value={this.state.password}
            />
          </label>
          <ErrorItem
            error={this.props.errors.password}
            message={"Password is too short (minimum is 6 characters)"}
            style={"error-item"}
          />

          <button className="signin-btn">Create Account</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;