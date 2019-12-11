import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from "./user_forms/login_form_container";
import { AuthRoute } from '../util/routes_api';
import SignupFormContainer from './user_forms/signup_form_container';
import ModalContainer from '../components/user_forms/modal/modal_container';
import NavBar from './nav_bar/nav_bar';
import GreetingMenu from './greeting/greeting_menu';

const App = () => {
    return (
      <main>
        < ModalContainer /> 
        < NavBar />
        {/* <Route exact path="/" component={GreetingContainer} /> */}
        {/* < LoginFormContainer /> */}
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      </main>
    );
}

export default App;