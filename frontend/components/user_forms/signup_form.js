import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';
import ErrorItem from './errors/error_item';

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.errors = this.props.errors
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
            < ErrorItem error={this.errors.firstName} 
              message={"Enter your first name"} 
              style={"error-item"}
            />
          </label>
          
          <label>
            <input
              type="text"
              onChange={this.handleUpdate("lastname")}
              placeholder="Last Name*"
              value={this.state.lastname}
            />
            < ErrorItem 
              error={this.errors.firstName} 
              message={"Enter your last name"}
              style={"error-item"}
            />
          </label>
          
          <label>
            <input
              type="email"
              onChange={this.handleUpdate("email")}
              placeholder="Enter email*"
              value={this.state.email}
            />
            < ErrorItem 
              error={this.errors.firstName} 
              message={"Enter your email"}
              style={"error-item"}
            />
          </label>
          <label>
            <input
              type="password"
              onChange={this.handleUpdate("password")}
              placeholder="Enter password*"
              value={this.state.password}
            />
            < ErrorItem 
              error={this.errors.firstName} 
              message={"Enter a password"}
              style={"error-item"}
            />
          </label>
          {/* <label>
            <input
              type="password"
              onChange={this.handleUpdate("password")}
              placeholder="Re-nter password*"
              value={this.state.password}
            />
          </label> */}
          <div className="checkboxes">
            <input type="checkbox" name="" id="1" />
            I am an administrative professional who books reservations for others.
          </div>
          <div className="checkboxes">
            <input type="checkbox" name="" id="2" />
            Remember me
          </div>
          
          <button className="signin-btn">Create Account</button>
        </form>
        <ul className="external-resource">
          <h3>Don't want to complete the form?</h3>
          <button className="external-resource-btn">Continue with Booking.com</button>
          <button className="external-resource-btn">Continue with FaceBook</button>
          <button className="external-resource-btn">Continue with Google</button>
        </ul>
        <p>
          By creating an account you agree to the <span>OpenPlay Terms of Use</span> <span>Privacy Policy</span>
        </p>
      </div>
    );
  }
}

export default SignupForm;