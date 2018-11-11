import React, { Component } from "react";
import { Link } from 'react-router-dom';
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

  // reset state, update component props, and fetch data when user navigates through links

  componentWillReceiveProps(nextProps) {
    this.setState({
      characters: [],
      films: []
    });

    this.props = nextProps;

    const { type } = this.props.location.state;

    type === "Films" ? this.fetchCharacters() : this.fetchFilms();
  }

  // fetch films for character in result

  fetchFilms() {
    const filmsArr = [];
    const { films } = this.props.location.state.detail;
      
    films.forEach((url) => {
      $.get(url)
        .then((res) => {
          // console.log("FILMS RES", res)
          filmsArr.push(res)
          this.setState({
            films: filmsArr
          });
        })
        .catch((error) => {
          console.log("Error fetching films", error);
        });
    });
  }

  // fetch characters in film result

  fetchCharacters() {
    const characterArr = [];
    const { characters } = this.props.location.state.detail;

    characters.forEach((url) => {
      $.get(url)
        .then((res) => {
          characterArr.push(res)
          this.setState({
            characters: characterArr
          });
        })
        .catch((error) => {
          console.log("Error getting characters", error);
        })
    });

  }

  render() {
    // console.log("DETAILS PROPS", this.props);
    const { type } = this.props.location.state;
    const { detail } = this.props.location.state;

    return (
      <div>
        {type === "People" ? (
          <PeopleDetail
            films={this.state.films}
            detail={detail}
          />
        ) : (
          <FilmDetail
            characters={this.state.characters}
            detail={detail}
          />
        )}
        <Link to="/">
          <button>
            Back to Search
          </button>
        </Link>
      </div>
    )
  }
}

export default Details;
