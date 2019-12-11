

import React from 'react';
import { Link } from 'react-router-dom';

const GreetingMenu = ({ logout }) => {
    
    return (
        <div className="session-menu">
            <div className="points-div">
            </div>
            <Link to="#">My Profile</Link>
            <Link to="#">My Dining History</Link>
            <Link to="#">My Saved Restaurants</Link>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default GreetingMenu;


