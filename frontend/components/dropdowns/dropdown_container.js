import { connect } from 'react-redux';
import { closeDropdown } from '../../actions/dropdown_actions';
import Dropdown from './dropdown';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
        dropdown: state.ui.dropdown
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeDropdown: () => dispatch(closeDropdown()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)