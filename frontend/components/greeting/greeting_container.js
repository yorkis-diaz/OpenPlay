import React from 'react';
import  { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.session.currentUser
    return {
        loggedIn: Boolean(currentUser),
        currentUser,
        dropdown: state.ui.dropdown
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        openDropdown: (dropdown) => dispatch(openDropdown(dropdown)),
        closeDropdown: () => dispatch(closeDropdown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);