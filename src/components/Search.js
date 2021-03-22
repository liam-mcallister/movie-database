import React, { useState } from "react";

const Search = (props) => {
  // searchValue state set to an empty string
  const [searchValue, setSearchValue] = useState("");

  // As the user types, store the value in searchValue
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // When the user clicks search, prevent a page refresh
  // + The search function (passed down via props from App.js) is called with the searchValue state
  // + The searchValue state is updated to an empty string via its updater function
  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(searchValue);
    setSearchValue("");
  };

  return (
    <div className="search-container">
      <form className="search-form">
        <input type="text" value={searchValue} onChange={handleChange} />
        <input
          className="btn"
          type="submit"
          value="Search"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Search;
