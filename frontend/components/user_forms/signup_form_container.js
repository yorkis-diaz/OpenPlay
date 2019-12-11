import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    const { session } = state.errors
    const errors = {
        firstName: (session.includes("Firstname can't be blank")),
        lastNAme: (session.includes("Lastname can't be blank")),
        email: (session.includes("Email can't be blank")),
        password: (session.includes("Password is too short (minimum is 6 characters)"))
    }
    return {
        errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);