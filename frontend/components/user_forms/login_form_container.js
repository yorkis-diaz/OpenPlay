import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);