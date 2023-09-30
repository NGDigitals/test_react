import React from 'react';
import ActionComponent from './ActionComponent';

const ActionLink = () => {
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log("The link was clicked.");
    };

    return (<ActionComponent link={'/'} text={'Take Me Home'} 
                onClick={handleClick} />
        // <a href="/" onClick={(e) => handleClick(e)}>
        //     Click Me
        // </a>
    );
};

export default ActionLink;