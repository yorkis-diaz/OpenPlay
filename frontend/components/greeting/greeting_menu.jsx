

import React from 'react';
import { Link } from 'react-router-dom';

const GreetingMenu = ({ logout }) => {
    
    return (
        <div className="session-menu">
            <div className="points-div">
            </div>
            <Link to="#">My Profile</Link>
            <Link to="#">My Event History</Link>
            <Link to="#">My Saved Events</Link>
            <button onClick={() => logout()}>Sign out</button>
        </div>
    )
}

export default GreetingMenu;


