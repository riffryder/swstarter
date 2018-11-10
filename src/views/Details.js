import React, { Component } from "react";
import $ from 'jquery';

import PeopleDetail from './PeopleDetail';
import FilmDetail from './FilmDetail';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      films: [],
    }
  }

  // fetch films or characters based on selection once component mounts

  componentDidMount() {
    const { type } = this.props.location.state;

    type === "People" ? this.fetchFilms() : this.fetchCharacters();
  }

  // fetch films for character in result

  fetchFilms() {
    const filmsArr = [];
    const { films } = this.props.location.state.detail;
      
    films.forEach((url) => {
      $.get(url)
        .then((res) => {
          filmsArr.push([res.title, res.url])
        })
        .catch((error) => {
          console.log("Error fetching films", error);
        });
    });

    this.setState({
      films: filmsArr
    });
  }

  // fetch characters in film result

  fetchCharacters() {
    const characterArr = [];
    const { characters } = this.props.location.state.detail;

    characters.forEach((url) => {
      $.get(url)
        .then((res) => {
          characterArr.push([res.name, res.url])
        })
        .catch((error) => {
          console.log("Error getting characters", error);
        })
    });

    this.setState({
      characters: characterArr
    });
  }

  render() {
    const { type } = this.props.location.state;

    return (
      <div>
        {type === "People" ? (
          <PeopleDetail films={this.state.films} />
        ) : (
          <FilmDetail characters={this.state.characters} />
        )}
      </div>
    )
  }
}

export default Details;
