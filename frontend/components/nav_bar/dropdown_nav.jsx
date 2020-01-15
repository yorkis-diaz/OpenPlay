import React from 'react';
import { Link } from 'react-router-dom';

const DropdownNav = ({ logout, closeDropdown, loggedIn }) => {
    if (loggedIn) {
        return (
            <div className="nav-drop-menu-content">
                <div className="drop-menu-profile">
                  <Link to="/user/profile">My Profile</Link>
                  <Link to="/user/saved-events">Favorites</Link>
                  <Link to="/user/profile">Event History</Link>
                  <button onClick={() => logout().then(()=> {closeDropdown()})
                  }>Sign out</button>
                </div>
                {/* <div className="drop-menu-languages">
                    {/* <h1>Languages</h1> */}
                    {/* <Link to="#">Deutch</Link>
                    <Link to="#">English</Link>
                    <Link to="#">Español</Link>
                    <Link to="#">Français</Link>
                    <Link to="#">Italiano</Link>
                    <Link to="#">Nederlands</Link>
                    <Link to="#">Japanese</Link> */}
                {/* </div> */} 
                <a href="http://yorkisdiaz.com">Portfolio</a>
                <a href="https://www.linkedin.com/in/yorkis-diaz-596958196/">LinkedIn</a>
                <a href="https://github.com/yorkis-diaz">Git</a>
                <a href="https://angel.co/yorkis-diaz">AngelList</a>
                {/* <a to="http://yorkisdiaz.com/">Portfolio</a> */}
                {/* <Link>Android App</Link>
                <Link>Help</Link> */}
            </div>
        )
    } else {
        return (
          <div className="nav-drop-menu-content">
            <div className="drop-menu-profile">
              <Link to="#">Sign up</Link>
              <Link to="#">Sign in</Link>
            </div>
            <div className="drop-menu-languages">
              <h1>Languages</h1>
              <Link to="#">Deutch</Link>
              <Link to="#">English</Link>
              <Link to="#">Español</Link>
              <Link to="#">Français</Link>
              <Link to="#">Italiano</Link>
              <Link to="#">Nederlands</Link>
              <Link to="#">日本語</Link>
            </div>
            <Link>iOS App</Link>
            <Link>Android App</Link>
            <Link>Help</Link>
          </div>
        );
    }

}

export default DropdownNav;



