import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({loggedIn, logout, currentUser, openModal, closeModal }) => {
  if (loggedIn) {
    return (
      <div> 
        <h1>Hi, {currentUser.firstname}</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => openModal('signup')}>Sign up</button>
        <button onClick={() => openModal('login')}>Sign in</button>
      </div>
    );
  }
};

export default Greeting;
