import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

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
