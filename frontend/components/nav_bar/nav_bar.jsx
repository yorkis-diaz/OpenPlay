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
        const dropLang = (this.props.dropdown === "dropdown-language") ? <DropdownContainer /> : null
        const dropDevVersion = (this.props.dropdown === "dev-version") ? <DropdownContainer /> : null
        return (
            <>
                {/* <DropClassChange/> testing nav*/}
                <nav className="nav-bar">
                    <div className="upper-nav">
                        <a href="#">For Events</a>
                        <button onClick={this.handleDropdown('dropdown-language')}>
                            Mobile
                        </button>
                        <a href="#">Help</a>
                        <button onClick={this.handleDropdown('dropdown-language')}>
                            EN
                        </button>
                    </div>
                    <div className="lower-nav">
                        <div className="logo" onClick={this.handleClick}>
                            <li></li>
                            <h2>OpenPlay</h2>
                        </div>
                        <div className="greeting-info">
                            <Route exact path="/" component={GreetingContainer} />
                            <div className="nav-drop-menu-btn">
                                <button onClick={this.handleDropdown('dropdown-nav')}>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {dropdown}
                {dropLang}
                {dropDevVersion}
            </>
        )
    }
}

export default NavBar;