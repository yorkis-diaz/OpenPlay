import React from 'react';
import GreetingMenu from '../greeting/greeting_menu';
import DropdownNav from '../nav_bar/dropdown_nav';


const Dropdown = ({ dropdown, closeDropdown, logout, openDropdown, loggedIn }) => {
    if (!dropdown) {
        return null;
    }
    debugger

    let component;
    switch (dropdown) {
        case 'greeting-menu':
            component = < GreetingMenu logout={logout}/>
            break;

        case 'dropdown-nav':
            component = < DropdownNav logout={logout} closeDropdown={closeDropdown} openDropdown={openDropdown} loggedIn={loggedIn}/>
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

export default Dropdown;