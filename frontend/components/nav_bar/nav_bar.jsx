import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const NavBar = () => {
    return (
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
                <div className="logo">
                    <li></li>
                    <h2>OpenPlay</h2>
                </div>
                <Route exact path="/" component={GreetingContainer} />
            </div>
            
        </nav>
    )
}

export default NavBar;