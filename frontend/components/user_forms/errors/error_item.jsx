import React from 'react';

const ErrorItem = ({error, message, style}) => {
    if (error) {
        return (
            <li className={style}>{message}</li>
        )
    } else {
        return (
            ""
        )
    }
    
}

export default ErrorItem;