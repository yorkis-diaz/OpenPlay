import { connect } from 'react-redux';
import { closeDropdown, openDropdown } from '../../actions/dropdown_actions';
import Dropdown from './dropdown';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    const  { currentUser } = state.session
    return {
        loggedIn: Boolean(currentUser),
        dropdown: state.ui.dropdown
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeDropdown: () => dispatch(closeDropdown()),
        openDropdown: (dropdown) => dispatch(openDropdown(dropdown)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)