import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from "./user_forms/login_form_container";
import { AuthRoute } from '../util/routes_api';
import SignupFormContainer from './user_forms/signup_form_container';

const App = () => {
    return (
      <main>
        <header>Welcome To OpenPlay</header>
        <Route exact path="/" component={GreetingContainer} />
        <button onClick={() => LoginFormContainer}></button>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </main>
    );
}

export default App;