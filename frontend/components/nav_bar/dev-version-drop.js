import React from 'react';
import { Link } from 'react-router-dom';

const DevVersionDrop = () => {
    return (
        <div className="dropdown-mobile-version">
            <Link to="#">iOS App</Link>
            <Link to="#">Android App</Link>
        </div>
    )
}

export default DevVersionDrop;