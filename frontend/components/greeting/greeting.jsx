import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({loggedIn, logout, currentUser }) => {
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
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
};

export default Greeting;
