import React from "react";

const Search = ({selection, searchTerm, handleSelection, handleChange}) => (
  <div>
    <h4>What are you searching for?</h4>
    <form>
      <label>
        <input
          type="radio"
          value="People"
          checked={selection === "People"}
          onChange={handleSelection}
        />
        People
      </label>
      <label>
        <input
          type="radio"
          value="Movies"
          checked={selection === "Movies"}
          onChange={handleSelection}
        />
        Movies
      </label>
      <div>
        <input
          type="text"
          placeholder="e.g. Chewbacca, Yoda, Boba Fett"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Search;