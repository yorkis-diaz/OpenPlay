import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/routes_api';
import ModalContainer from '../components/user_forms/modal/modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchBar from './search_bar/search_bar';
// import ErrorItem from './user_forms/errors/error_item';


const App = () => {
    return (
      <main>
        < ModalContainer /> 
        < NavBarContainer />
        < SearchBar />
      </main>
    );
}

export default App;