import React from 'react';

const ErrorItem = ({error, message, style}) => {
    if (error) {
        return (
            <span className={style}>
                {message}
            </span>
        )
    } else {
        return (
            ""
        )
    }
    
}

export default ErrorItem;