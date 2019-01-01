import React, { Component } from 'react';
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
      </Router>
    );
  }
}

export default App;
