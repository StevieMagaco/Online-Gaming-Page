import React, { Component } from 'react';
import logo from './logo.svg';
//import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
//import Register from "./pages/register";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
