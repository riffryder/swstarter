import React from "react";

const Search = (props) => (
  <div>
    <h4>What are you searching for?</h4>
    <form>
      <label>
        <input
          type="radio"
          value="People"
          checked={true}
        />
        People
      </label>
      <label>
        <input
          type="radio"
          value="Movies"
        />
        Movies
      </label>
      <div>
        <input
          type="text"
          placeholder="e.g. Chewbacca, Yoda, Boba Fett"
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Search;