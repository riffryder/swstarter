import React, { Component } from "react";

import Search from './Search'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selection: "People",
      searchTerm: "",
    }

    this.handleSelection = this.handleSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handle radio button toggle

  handleSelection(event) {
    this.setState({
      selection: event.target.value
    })
  }

  // handle search term change

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>SWStarter</h1>
        <Search
          selection={this.state.selection}
          searchTerm={this.state.searchTerm}
          handleSelection={this.handleSelection}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Home;
