import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/routes_api';
import ModalContainer from '../components/user_forms/modal/modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchBar from './search_bar/search_bar';
import HomepageContainer from './homepage_component/homepage_container';
import EventShowContainer from './events/event_show_container';

// import ErrorItem from './user_forms/errors/error_item';


const App = () => {
    return (
      <main>
        <header>
          <ModalContainer />
          <NavBarContainer />
          <Route exact path="/" component={SearchBar} />
        </header>

        <Route exact path="/events/:eventId" component={EventShowContainer} />

        <Route exact path="/" component={HomepageContainer} />
        <footer></footer>
      </main>
    );
}

export default App;