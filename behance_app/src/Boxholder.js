import React, { Component } from 'react'
let searchTerm = 'failure';




class Boxholder extends Component {
    constructor(props){
        super(props)
        this.state = {
         searchTerm: '',
        }
      }




    componentDidMount() {
        const pathname = window.location.pathname;
        searchTerm = pathname.slice(1);    
        console.log(searchTerm);
        this.setState({ searchTerm: searchTerm })
        return searchTerm;
    }




    
  render() {

    
    // const planets = this.props.planets;
    // let planetColor = '';
    // let planetMoons = '';


    // for (let i = 0, len = planets.length; i < len; i++) {
    //     if (planets[i].name === planet) {
    //       planetColor = planets[i].color
    //       planetMoons = planets[i].num_moons
    //       break; 
    //     }
    //   }

      console.log(searchTerm)
    //   console.log(planet)
  
    return (
      <div>
        <h1> {searchTerm} Collections: </h1>
        {console.log(searchTerm)}
      </div>
    );
  }
}

export default Boxholder;