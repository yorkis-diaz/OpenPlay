import React from 'react';
import { Route } from 'react-router-dom';
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
        return (
            <>
                <nav className="nav-bar">
                    <div className="upper-nav">
                        <a href="#">For Events</a>
                        <select>
                            <option placeholder="Mobile" hidden>Mobile</option>
                            <option >iOS App</option>
                            <option >Android App</option>
                        </select>
                        <a href="#">Help</a>
                        <select>
                            <option placeholder="EN" hidden>EN</option>
                            <option >Deutch</option>
                            <option >English</option>
                            <option >Español</option>
                        </select>
                    </div>
                    <div className="lower-nav">
                        <div className="logo" onClick={this.handleClick}>
                            <li></li>
                            <h2>OpenPlay</h2>
                        </div>
                        <div className="greeting-info">
                            <Route exact path="/" component={GreetingContainer} />
                            {/* <h1></h1> */}
                            <div className="nav-drop-menu-btn">
                                {/* {dropdown} */}
                                <button onClick={this.handleDropdown('dropdown-nav')}>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {dropdown}
            </>
        )
    }
}

export default NavBar;