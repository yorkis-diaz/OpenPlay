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
import UserProfileContainer from './user_profile/user_profile_container';
import SavedEventsContainer from './user_profile/saved_events_container';
import ReviewsContainer from './reviews/reviews_container';
import Footer from './homepage_component/footer';


const App = () => {
    return (
      <main>
        <header>
          <ModalContainer />
          <NavBarContainer />
          <Route exact path="/" component={SearchBarContainer} />
        </header>

        <Route path="/reservation/view/:reservationId" component={ReservationViewContainer} />
        <Route path="/reviews/:reservationId" component={ReviewsContainer} />
        <AuthRoute exact path="/user/profile" component={UserProfileContainer} />
        <AuthRoute exact path="/user/saved-events" component={SavedEventsContainer} />
        <AuthRoute exact path="/reservation" component={BookReservationContainer}/>
        <Route path="/search/:searchQuery" component={SearchResultContainer} />
        <Route exact path="/events/:eventId" component={EventShowContainer} />

        <Route exact path="/" component={HomepageContainer} />
        <footer>
          <Footer />
        </footer>
      </main>
    );
}

export default App;