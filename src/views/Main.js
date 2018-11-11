import React, { Component } from "react";
import $ from "jquery";

import Search from './Search'
import Results from './Results'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selection: "People",
      searchTerm: "",
      results: [],
    }

    this.handleSelection = this.handleSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle radio button toggle

  handleSelection(event) {
    this.setState({
      selection: event.target.value,
      searchTerm: "",
      results: []
    })
  }

  // handle search term change

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  // handle search term submit

  handleSubmit(event) {
    let searchTerm = this.state.searchTerm;
    let targetUrl = 'https://swapi.co/api';
    console.log('SEARCH TERM', searchTerm)
    if (this.state.selection === "People") {
      $.get(`${targetUrl}/people/?search=${searchTerm}`)
        .then((res) => {
          this.setState({
            results: res.results
          });
          // console.log("CHAR RESULTS", this.state.results);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else if (this.state.selection === "Movies") {
      $.get(`${targetUrl}/films/?search=${searchTerm}`)
        .then((res) => {
          this.setState({
            results: res.results
          });
          // console.log("MOVIE RESULTS", this.state.results);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Search
          selection={this.state.selection}
          searchTerm={this.state.searchTerm}
          handleSelection={this.handleSelection}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results
          selection={this.state.selection}
          results={this.state.results}
        />
      </div>
    )
  }
}

export default Home;
