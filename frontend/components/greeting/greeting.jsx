import React from "react";
import { Link } from "react-router-dom";
import DropdownContainer from "../dropdowns/dropdown_container";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  // componentDidUpdate () {
  //   this.props.closeDropdown();
  // }

  handleDropdown (value) {

    return (e) => {
      e.preventDefault();
      if (this.props.dropdown !== value) {
        this.props.openDropdown(value)
      } else {
        this.props.closeDropdown()
      }
    }
  }

  render () {
    if (this.props.loggedIn) {
      return (
        <div className="greeting">
          <DropdownContainer />
          <button onClick={this.handleDropdown('greeting-menu')}>
             <h1>Hi, {this.props.currentUser.firstname} </h1>
          </button>
          
        </div>
      );
    } else {
      return (
        <div className="session-buttons">
          <button className="signup-greet-btn" onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button className="signin-greet-btn" onClick={() => this.props.openModal('login')}>Sign in</button>
        </div>
      );
    }
  }
}
// const Greeting = ({loggedIn, logout, currentUser, openModal, openDropdown }) => {

  
// };

export default Greeting;
