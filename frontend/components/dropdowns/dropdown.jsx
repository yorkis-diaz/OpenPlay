import React from 'react';
import GreetingMenu from '../greeting/greeting_menu';
import DropdownNav from '../nav_bar/dropdown_nav';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        if (!this.props.dropdown) {
          return null;
        }
        const { dropdown, closeDropdown, logout, openDropdown, loggedIn, openModal, closeModal } = this.props
        let component;
        switch (dropdown) {
            case 'greeting-menu':
                component = < GreetingMenu logout={logout} closeDropdown={closeDropdown}/>;
                break;
    
            case 'dropdown-nav':
                component = < DropdownNav 
                    logout={logout} 
                    closeDropdown={closeDropdown} 
                    openDropdown={openDropdown} 
                    loggedIn={loggedIn} 
                    openModal={openModal} 
                    closeModal={closeModal}
                />;
                break;
    
            default:
                return null;
        }
    
        return (
            <>
                {component}
            </>
        )

    }
}

export default Dropdown;