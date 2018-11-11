import React from "react";
import { Link } from "react-router-dom";

const FilmDetail = ({characters, detail}) => {
  // console.log("FILM CHARACTERS", characters);
  const { title, opening_crawl } = detail;

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <h4>Opening Crawl</h4>
        <p>{opening_crawl}</p>
      </div>
      <div>
        <h4>Characters</h4>
        {characters.length > 0 ? (
          characters.map((character, index) =>
            <Link to={{
              pathname: `/people/${character.name}`,
              state: { type: "People", detail: character }
            }} key={index} >
              {character.name}{index === characters.length - 1 ? "" : ", "}
            </Link>
          )
        ) : (
            "LOADING"
          )}
      </div>
    </div>
  )
}

export default FilmDetail;