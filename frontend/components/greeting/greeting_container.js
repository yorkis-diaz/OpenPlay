import React from 'react';
import  { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.session.currentUser
    return {
        loggedIn: Boolean(currentUser),
        currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);