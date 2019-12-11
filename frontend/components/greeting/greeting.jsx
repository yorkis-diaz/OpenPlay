import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({loggedIn, logout, currentUser, openModal, closeModal }) => {
  if (loggedIn) {
    return (
      <>
        <div className="greeting"> 
          <h1>Hi, {currentUser.firstname}</h1>
        </div>
        <div className="session-menu">
          <div className="points-div">
          </div>
          <Link to="#">My Profile</Link>
          <Link to="#">My Dining History</Link>
          <Link to="#">My Saved Restaurants</Link>
          <button onClick={() => logout()}>Logout</button>
        </div>
      </>
    );
  } else {
    return (
      <div className="session-buttons">
        <button className="signup-greet-btn" onClick={() => openModal('signup')}>Sign up</button>
        <button className="signin-greet-btn" onClick={() => openModal('login')}>Sign in</button>
      </div>
    );
  }
};

export default Greeting;
