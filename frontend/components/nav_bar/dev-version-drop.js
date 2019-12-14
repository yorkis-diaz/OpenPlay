import React from 'react';
import { Link } from 'react-router-dom';

const DevVersionDrop = () => {
    return (
        <div className="dropdown-languages-links">
            <Link to="#">iOS App</Link>
            <Link to="#">Android App</Link>
        </div>
    )
}

export default DevVersionDrop;