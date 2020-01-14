import React from 'react';
import GreetingMenu from '../greeting/greeting_menu';
import DropdownNav from '../nav_bar/dropdown_nav';
// import DropdownLanguage from '../nav_bar/dropdown_language';
// import DevVersionDrop from '../nav_bar/dev-version-drop';


class Dropdown extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate (prevProps) {
    }
    
    

    render () {
        if (!this.props.dropdown) {
          return null;
        }
        const { dropdown, closeDropdown, logout, openDropdown, loggedIn } = this.props
        let component;
        switch (dropdown) {
            case 'greeting-menu':
                component = < GreetingMenu logout={logout} closeDropdown={closeDropdown}/>;
                break;
    
            case 'dropdown-nav':
                component = < DropdownNav logout={logout} closeDropdown={closeDropdown} openDropdown={openDropdown} loggedIn={loggedIn}/>;
                break;
    
            // case 'dropdown-language':
            //     component = <DropdownLanguage />;
            //     break;
    
            // case 'dev-version':
            //     component = <DevVersionDrop />;
            //     break;
    
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