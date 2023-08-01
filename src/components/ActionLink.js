import React from 'react';

const ActionLink = () => {
    const handleClick = e => {
        e.preventDefault();
        console.log("The link was clicked.");
    };

    return (
        <a href="/" onClick={event => handleClick(event)}>
            Click Me
        </a>
    );
};

export default ActionLink;