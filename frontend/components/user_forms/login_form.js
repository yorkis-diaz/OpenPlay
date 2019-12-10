import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';

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

  demoUser (e) {
    e.preventDefault();
    this.props.login({
      email: "johndoe@gmail.com",
      password: "johndoe"
    })
  }
  
  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.login(user).then(() => this.props.history.push('/'));
      
  }

  handleUpdate (value) {
    return (e) => {
      this.setState({
        [value]: e.target.value
      });
    };
  };

  render () {
    if (this.props.loggedIn) {
      return <Redirect to='/'/>
    }
    return (
      <div className="signup">
        <div className="form-header">
          <h1>Please sign in</h1>
          <hr />
        </div>
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
          <button className="signin-btn">Sign In</button>
          <p>New to OpenPlay? <Link to="/signup">Create an account</Link></p>
          <button onClick={this.demoUser}>Demo User</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;