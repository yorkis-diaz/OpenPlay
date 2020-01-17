import React from 'react';
import { Link } from 'react-router-dom';

const DropdownNav = ({ logout, closeDropdown, loggedIn, openModal, closeModal }) => {
  debugger
    if (loggedIn) {
        return (
          <>
            {/* dropdown closing divs */}
            <div className="dropdown-modal" onClick={() => closeDropdown()}>
              <div className="dropdown-modal-child" onClick={e => e.stopPropagation()}>
                {/*  */}
                <div className="nav-drop-menu-content">
                    <div className="drop-menu-profile">
                      <Link to="/user/profile">My Profile</Link>
                      <Link to="/user/saved-events">Favorites</Link>
                      <Link to="/user/profile">Event History</Link>
                      <button onClick={() => logout().then(()=> {closeDropdown()})
                      }>Sign out</button>
                    </div>
                    <a href="http://yorkisdiaz.com">Portfolio</a>
                    <a href="https://www.linkedin.com/in/yorkis-diaz-596958196/">LinkedIn</a>
                    <a href="https://github.com/yorkis-diaz">Git</a>
                    <a href="https://angel.co/yorkis-diaz">AngelList</a>
                </div>
              </div>
            </div>
          </>
        )
    } else {
        return (
          <>
            {/* dropdown closing divs */}
            <div className="dropdown-modal" onClick={() => closeDropdown()}>
              <div className="dropdown-modal-child" onClick={e => e.stopPropagation()}>
                {/*  */}
                <div className="nav-drop-menu-content">
                  <div className="drop-menu-profile">
                    <button className="" onClick={() => openModal('signup')}>Sign up</button>
                    <button className="" onClick={() => openModal('login')}>Sign in</button>
                  </div>
                  <a target="_blank" href="http://yorkisdiaz.com">Portfolio</a>
                  <a target="_blank" href="https://www.linkedin.com/in/yorkis-diaz-596958196/">LinkedIn</a>
                  <a target="_blank" href="https://github.com/yorkis-diaz">Git</a>
                  <a target="_blank" href="https://angel.co/yorkis-diaz">AngelList</a>
                </div>
              </div>
            </div>
          </>
        );
    }

}

export default DropdownNav;



