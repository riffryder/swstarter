import React, { Component } from "react";

import Search from './Search'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  render() {
    return (
      <div>
        <h1>SWStarter</h1>
        <Search />
      </div>
    )
  }
}

export default Home;
