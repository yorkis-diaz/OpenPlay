import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';
import GreetingMenu from '../greeting/greeting_menu';

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    // this.menu = null
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  };

  demoUser (e) {
    e.preventDefault();
    this.props.login({
      email: "johndoe@gmail.com",
      password: "johndoe"
    })
    this.props.closeModal()
  }
  
  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.login(user);
    this.props.closeModal()
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
      // this.menu = < GreetingMenu />
    };

  };

  render () {
    // if (this.props.loggedIn) {
    //   return <Redirect to='/'/>
    // }
    return (
      <div className="form-container">
        <h1>Please sign in</h1>
        {this.menu}
        {/* <hr/> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
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
          <hr/>
          <button className="demo-user-btn" onClick={this.demoUser}>Demo User</button>
        </form>
        <ul className="external-resource">
          <h3>Don't want to complete the form?</h3>
          <button className="external-resource-btn">Continue with Booking.com</button>
          <button className="external-resource-btn">Continue with FaceBook</button>
          <button className="external-resource-btn">Continue with Google</button>
        </ul>
        <p>New to OpenPlay? {this.props.signupForm}</p>
        <p>
          This site is protected by reCAPTCHA and the Google <span>Privacy</span> <span>Policy</span> and <span>Terms of Service</span> apply.
        </p>
      </div>
    );
  }
}

export default LoginForm;