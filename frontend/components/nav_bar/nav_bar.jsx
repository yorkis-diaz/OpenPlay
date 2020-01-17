import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import DropdownContainer from '../dropdowns/dropdown_container'





class NavBar extends React.Component {
    constructor (props) {
        super(props)
        this.handleDropdown = this.handleDropdown.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }
    handleDropdown(value) {
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

    handleClick (e) {
        e.preventDefault();
        this.props.history.push("/")
    }

    render () {
        const dropdown = (this.props.dropdown === "dropdown-nav") ? <DropdownContainer /> : null
        // const dropLang = (this.props.dropdown === "dropdown-language") ? <DropdownContainer /> : null
        // const dropDevVersion = (this.props.dropdown === "dev-version") ? <DropdownContainer /> : null
        return (
          <>
            <nav
              className="nav-bar"
            >
              <div className="upper-nav">
                <a target="_blank" href="http://yorkisdiaz.com/">Portfolio</a>
                {/* <button onClick={this.handleDropdown("dev-version")}>
                  Mobile <span className="mobile-arrow">⌃</span>
                </button> */}
                <a target="_blank" href="https://www.linkedin.com/in/yorkis-diaz-596958196/">LinkedIn</a>
                <a target="_blank" href="https://github.com/yorkis-diaz">Git</a>
                <a target="_blank" href="https://angel.co/yorkis-diaz">AngelList</a>
                {/* <button onClick={this.handleDropdown("dropdown-language")}>
                  EN <span className="en-arrow">⌃</span>
                </button> */}
              </div>
              <div className="lower-nav-container">
                <div className="lower-nav">
                  <div className="logo">
                    <Link to="/">
                      <li>
                        <span className="arrow-logo">⤗</span>
                        <span className="target-logo">⌾</span>
                        <h2 className="app-name">OpenPlay</h2>
                      </li>
                    </Link>
                  </div>
                  <div className="greeting-info">
                    <Route path="/" component={GreetingContainer} />
                    <div className="nav-drop-menu-btn">
                      <button
                        onClick={this.handleDropdown("dropdown-nav")}
                      >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            {dropdown}
            {/* {dropLang} */}
            {/* {dropDevVersion} */}
          </>
        );
    }
}

export default NavBar;