import React from "react";
import "./SearchInput.scss";

const SearchInput = ({ onChange, numberPodcasts, keyword }) => {
  return (
    <div className="search-input">
      <div className="search-input__counter">
        <p>{numberPodcasts}</p>
      </div>
      <input
        className="search-input__search"
        placeholder="Filter Podcasts..."
        onChange={({ target }) => onChange(target.value)}
        value={keyword}
        data-testid="search"
      />
    </div>
  );
};

export default SearchInput;
