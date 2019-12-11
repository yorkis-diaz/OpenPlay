import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state, ownProps) => {
    // const currentUser = state.session.currentUser
    return {
        // loggedIn: Boolean(currentUser),
        // currentUser,
        dropdown: state.ui.dropdown
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openDropdown: (dropdown) => dispatch(openDropdown(dropdown)),
        closeDropdown: () => dispatch(closeDropdown()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);