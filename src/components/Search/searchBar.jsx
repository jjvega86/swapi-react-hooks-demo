import React, { useState } from "react";

const SearchBar = ({ searchForCharacter }) => {
  const [term, setTerm] = useState("");

  //TODO: How do we debug and track the value of "term" using useEffect?

  const handleSubmit = (event) => {
    event.preventDefault();
    searchForCharacter(term);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          onChange={(event) => setTerm(event.target.value)}
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={term}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default SearchBar;
