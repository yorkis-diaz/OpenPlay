import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/routes_api';
import ModalContainer from '../components/user_forms/modal/modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SearchBarContainer from './search/search_bar_container';
import HomepageContainer from './homepage_component/homepage_container';
import EventShowContainer from './events/event_show_container';
import SearchResultContainer from './search/search_result_container';
import BookReservationContainer from './reservations/book_reservation_container';
import ReservationViewContainer from './reservations/reservation_view_container';

// import ErrorItem from './user_forms/errors/error_item';


const App = () => {
    return (
      <main>
        <header>
          <ModalContainer />
          <NavBarContainer />
          <Route exact path="/" component={SearchBarContainer} />
        </header>

        <Route path="/reservation/view/:reservationId" component={ReservationViewContainer} />
        <AuthRoute exact path="/reservation" component={BookReservationContainer}/>
        <Route path="/search/:searchQuery" component={SearchResultContainer} />
        <Route exact path="/events/:eventId" component={EventShowContainer} />

        <Route exact path="/" component={HomepageContainer} />
        <footer></footer>
      </main>
    );
}

export default App;