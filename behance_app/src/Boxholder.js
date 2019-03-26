import React, { Component } from 'react'
let searchTerm = 'failure';




class Boxholder extends Component {
    constructor(props){
        super(props)
        this.state = {
         searchTerm: '',
         url: '',
         collection: [],
        }
      }




    componentDidMount() {
        const pathname = window.location.pathname;
        searchTerm = pathname.slice(1);    
        let url = `https://thingproxy.freeboard.io/fetch/http://www.behance.net/v2/collections?q=${searchTerm}&api_key=9qY9L6OYK133rLzSALQwTuUmz8IW5wsO`;
        console.log(searchTerm);
        this.setState({ 
            searchTerm: searchTerm, 
            // url: 'https://thingproxy.freeboard.io/fetch/http://www.behance.net/v2/collections?q=Architecture&api_key=9qY9L6OYK133rLzSALQwTuUmz8IW5wsO' 
        })
        fetch(url)
        .then((response) => { 
          return (response.json())
        })
        .then((json) => {
            this.setState({ collection:json })
            console.log(this.state.collection.collections[0].project_covers[0])
             }
        )
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