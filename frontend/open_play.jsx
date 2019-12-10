import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: {
                currentUser: currentUser.user,
                reservations: currentUser.reservations,
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

    // Testing //
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.login = login
    window.logout = logout
});