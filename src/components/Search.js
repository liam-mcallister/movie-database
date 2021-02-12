import React from 'react';

const Search = () => {
    return (
        <div className='search-container'>
            <form className='search-form'>
                <input type='text' />
                <input class='btn' type='submit' value='Search' />
            </form>
        </div>
    );
};

export default Search;