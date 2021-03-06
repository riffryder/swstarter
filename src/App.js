import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main";
import Details from "./views/Details"
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      SWStarter
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/people/:name" component={Details} />
            <Route path="/films/:title" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
