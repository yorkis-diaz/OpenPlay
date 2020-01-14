import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { searchEvents } from './actions/event_actions';



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                reservations: currentUser.reservations,
                events: currentUser.events
            },
            session: {
                currentUser: currentUser.user,
                savedEvents: currentUser.savedEvents
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    delete window.currentUser;
    const root = document.getElementById("root");
    ReactDOM.render(< Root store={store} />, root);

});