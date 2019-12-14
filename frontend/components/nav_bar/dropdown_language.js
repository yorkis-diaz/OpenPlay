import React from 'react';
import { Link } from 'react-router-dom';

const DropdownLanguage = () => {
    return (
        <div className="dropdown-languages-links">
            <Link to="#">Deutch</Link>
            <Link to="#">English</Link>
            <Link to="#">Español</Link>
            <Link to="#">Français</Link>
            <Link to="#">Italiano</Link>
            <Link to="#">Nerlands</Link>
            <Link to="#">日本語</Link>
        </div>
    )
}

export default DropdownLanguage;