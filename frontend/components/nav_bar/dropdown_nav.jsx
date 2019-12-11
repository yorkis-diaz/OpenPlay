import React from 'react';
import { Link } from 'react-router-dom';

const DropdownNav = ({ logout, newClass}) => {

    return (
        <div className="nav-drop-menu-content">
            <div className="drop-menu-profile">
                <Link to="#">My Profile</Link>
                <Link to="#">Favorites</Link>
                <Link to="#">Event History</Link>
                <button onClick={() => logout()}>Sign out</button>
            </div>
            <div className="drop-menu-languages">
                <h1>Languages</h1>
                <Link to="#">Deutch</Link>
                <Link to="#">English</Link>
                <Link to="#">Español</Link>
                <Link to="#">Français</Link>
                <Link to="#">Italiano</Link>
                <Link to="#">Nederlands</Link>
                <Link to="#">Japanese</Link>
            </div>
            <Link>iOS App</Link>
            <Link>Android App</Link>
            <Link>Help</Link>
        </div>
    )
}

export default DropdownNav;


