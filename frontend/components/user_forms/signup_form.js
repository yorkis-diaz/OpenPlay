import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';

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
  
  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.signup(user);
    this.props.closeModal()
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
    // if (this.props.loggedIn) {
    //   return <Redirect to='/'/>
    // }
    return (
      <div className="form-container">
        <h1>Welcome to OpenPlay!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              onChange={this.handleUpdate("firstname")}
              placeholder="First Name*"
              value={this.state.email}
            />
          </label>
          <label>
            <input
              type="text"
              onChange={this.handleUpdate("lastname")}
              placeholder="Last Name*"
              value={this.state.password}
            />
          </label>
          <label>
            <input
              type="email"
              onChange={this.handleUpdate("email")}
              placeholder="Enter email*"
              value={this.state.password}
            />
          </label>
          <label>
            <input
              type="password"
              onChange={this.handleUpdate("password")}
              placeholder="Enter password*"
              value={this.state.password}
            />
          </label>
          <label>
            <input
              type="password"
              onChange={this.handleUpdate("password")}
              placeholder="Re-nter password*"
              value={this.state.password}
            />
          </label>
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