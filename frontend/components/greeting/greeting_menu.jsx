

import React from 'react';
import { Link } from 'react-router-dom';

const GreetingMenu = ({ logout, closeDropdown }) => {  
    
  return (
    <>
      {/* dropdown closing divs */}
      <div className="dropdown-modal" onClick={() => closeDropdown()}>
        <div className="dropdown-modal-child" onClick={e => e.stopPropagation()}>
          {/*  */}
          <div className="session-menu" >
            <Link to="/user/profile">My Profile</Link>
            <Link to="/user/profile">My Event History</Link>
            <Link to="/user/saved-events">My Saved Events</Link>
            <button onClick={() => logout()}>Sign out</button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default GreetingMenu;


