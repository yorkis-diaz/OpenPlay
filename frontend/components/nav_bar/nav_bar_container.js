import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom'
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state, ownProps) => {
    return {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));