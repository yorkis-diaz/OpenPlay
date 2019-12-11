

import React from 'react';
import { Link } from 'react-router-dom';

const GreetingMenu = () => {
    return (
        <ul className="session-menu-test">
            {/* <div className="points-div-test">
            </div> */}
            <li><Link to="#">My Profile</Link></li>
            <li><Link to="#">My Dining History</Link></li>
            <li><Link to="#">My Saved Restaurants</Link></li>
            {/* <button onClick={() => logout()}>Logout</button> */}
        </ul>
    )
}

export default GreetingMenu;


