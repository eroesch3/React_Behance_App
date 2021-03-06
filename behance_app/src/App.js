import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from './Components/Welcome.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
      <BrowserRouter/>
      <div className="App">
        <header className="App-header">
        <Route exact path="" render={() => <Welcome />} />
        </header>
      </div>
      </div>
    )
  }
}

export default App;
