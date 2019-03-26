import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch
 } from "react-router-dom"
import Welcome from './Welcome.js';
import './App.css';


class App extends Component {
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
            APP RENDERS
            <Switch></Switch>
            < Welcome />          
        </header>
      </div>
    );
  }
}

export default App;
