import React from "react";
import { Link, Route } from "react-router-dom";
import DropdownContainer from "../dropdowns/dropdown_container";
import DropdownNav from "../nav_bar/dropdown_nav";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.handleDropdown = this.handleDropdown.bind(this)
  }

  componentDidUpdate (prev) {
    const { dropdown } = this.props
    if ((prev.location.pathname !== this.props.history.location.pathname) && (dropdown !== null)) {
      this.props.closeDropdown();
    }
  }


  handleDropdown (value) {
    return (e) => {
      e.preventDefault();
      if ((this.props.dropdown !== null) && (this.props.dropdown !== value)) {
        this.props.closeDropdown();
        this.props.openDropdown(value);
      } else if (this.props.dropdown === null) {     
        this.props.openDropdown(value)
      } else {
        this.props.closeDropdown()
      }
    }
  }

  render () {
    if (this.props.loggedIn) {
      const dropdown = (this.props.dropdown === "greeting-menu") ? <DropdownContainer/> : null
      return (
        <div className="greeting">
          {dropdown}
          <hr />
          <button className="greeting-content" on onClick={this.handleDropdown('greeting-menu')}>
             <h1>Hi, {this.props.currentUser.firstname} </h1>
          </button>
          {/* <div>
            <h1>{"\u2303"}</h1>
          </div> */}
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
