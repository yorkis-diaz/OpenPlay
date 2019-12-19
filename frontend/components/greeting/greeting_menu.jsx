

import React from 'react';
import { Link } from 'react-router-dom';

const GreetingMenu = ({ logout, closeDropdown }) => {  
    
    return (
      <div className="session-menu" >
        {/* <div className="points-div"></div> */}
        <Link to="/user/profile">My Profile</Link>
        <Link to="/user/profile">My Event History</Link>
        <Link to="/user/saved-events">My Saved Events</Link>
        <button onClick={() => logout()}>Sign out</button>
      </div>
    );
}

export default GreetingMenu;


