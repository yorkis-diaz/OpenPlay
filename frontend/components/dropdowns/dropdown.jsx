import React from 'react';
import GreetingMenu from '../greeting/greeting_menu';


const Dropdown = ({ dropdown, closeDropdown, logout }) => {
    if (!dropdown) {
        return null;
    }

    let component;
    switch (dropdown) {
        case 'greeting-menu':
            component = < GreetingMenu logout={logout}/>
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