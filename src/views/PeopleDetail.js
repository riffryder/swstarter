import React from "react";
import { Link } from "react-router-dom";

const PeopleDetail = ({films, detail}) => {
  // console.log("CHARACTER FILMS", films);
  const { 
    name,
    birth_year,
    gender,
    eye_color,
    hair_color,
    height,
    mass
  } = detail;

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <h4>Details</h4>
          <ul>
            <li>Birth Year: {birth_year}</li>
            <li>Gender: {gender}</li>
            <li>Eye Color: {eye_color}</li>
            <li>Hair Color: {hair_color}</li>
            <li>Height: {height}</li>
            <li>Mass: {mass}</li>
          </ul>
      </div>
      <div>
        <h3>Movies</h3>
        {films.length > 0 ? (
          films.map((movie, index) => 
            <Link to={{
              pathname: `/films/${movie.title}`,
              state: { type: "Films", detail: movie }
            }} key={index}>
              {movie.title}{index === films.length - 1 ? "" : ", "}
            </Link>
          )
        ) : (
          "LOADING"
        )}
      </div>
    </div>
  )
};

export default PeopleDetail;