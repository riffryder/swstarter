import React from "react";
import "./Search.css";

const Search = ({selection, searchTerm, handleSelection, handleChange, handleSubmit}) => (
  <div className="SearchContainer">
    <h4 className="What-are-you-searching-for">What are you searching for?</h4>
    <form onSubmit={handleSubmit}>
      <div className="RadioContainer">
        <label>
          <input
            type="radio"
            value="People"
            checked={selection === "People"}
            onChange={handleSelection}
            className="RadioButton"
          />
          People
        </label>
        <label>
          <input
            type="radio"
            value="Movies"
            checked={selection === "Movies"}
            onChange={handleSelection}
            className="RadioButton"
          />
          Movies
        </label>
      </div>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="e.g. Chewbacca, Yoda, Boba Fett"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <input className="SearchButton" type="submit" value="Search"/>
    </form>
  </div>
);

export default Search;