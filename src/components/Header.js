import React from 'react';

const Header = (props) => {
    return (
        <div className='header-container'>
            <h1>{props.text}</h1>
        </div>
    );
};

export default Header;