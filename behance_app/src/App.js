import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch
 } from "react-router-dom"
import Welcome from './Welcome.js';
// import PlanetList from './PlanetList.js';
// import PlanetDetail from './PlanetDetail.js';
// import RandomPlanet from './RandomPlanet.js';
import './App.css';


class App extends Component {
  
 //3/25 7:50pm
//   componentDidMount() {
//     fetch('https://thingproxy.freeboard.io/fetch/http://www.behance.net/v2/collections?q=Academia&api_key=9qY9L6OYK133rLzSALQwTuUmz8IW5wsO')
//     .then((response) => { 
//       return (response.json())
//     })
//   .then((json) => {
//     console.log(json)
//     // this.setState({ stocks:json })
//   })
//   // console.log(this.state.stocks)
// }
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            APP RENDERS
            <Switch></Switch>
            < Welcome />
          </p>
          
          
        </header>
      </div>
    );
  }
}

export default App;
