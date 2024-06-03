import React from "react";

const SearchBar = ({ query, setQuery, search, error }) => (
  <input
    type="text"
    className={`search ${error ? "error" : ""}`}
    placeholder="Search for city"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyUp={search}
  />
);

export default SearchBar;
