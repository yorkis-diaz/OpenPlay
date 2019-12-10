import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form'
import { Link } from 'react-router-dom'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    signupForm: (
      <Link to="#" onClick={() => dispatch(openModal('signup'))}>
        Create an account
      </Link>
    ),
    closeModal: () =>  dispatch(closeModal())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)