import React from 'react';
import GreetingMenu from '../greeting/greeting_menu';
import DropdownNav from '../nav_bar/dropdown_nav';


const Dropdown = ({ dropdown, closeDropdown, logout, openDropdown }) => {
    if (!dropdown) {
        return null;
    }

    let component;
    switch (dropdown) {
        case 'greeting-menu':
            component = < GreetingMenu logout={logout}/>
            break;

        case 'dropdown-nav':
            component = < DropdownNav logout={logout} openDropdown={openDropdown} closeDropdown={closeDropdown}/>
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