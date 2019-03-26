import React, { Component } from 'react'
import Box from './Box.js';
let searchTerm = '';
let inputArray = [];

class Boxholder extends Component {
    constructor(props){


        super(props)
        this.state = {
         searchTerm: '',
         url: '',
         collectionStat: '',
        }
      }

    componentDidMount() {
        const pathname = window.location.pathname;
        searchTerm = pathname.slice(1);    
        let url = `https://thingproxy.freeboard.io/fetch/http://www.behance.net/v2/collections?q=${searchTerm}&api_key=9qY9L6OYK133rLzSALQwTuUmz8IW5wsO`;
        this.setState({ 
            searchTerm: searchTerm,  
        })
        fetch(url)
        .then((response) => { 
          return (response.json())
        })
        .then((json) => {
            this.setState({ collectionStat:json.collections })
            // console.log(this.state.collectionStat[0].project_covers[0])
             }
        )
    }
    

  render() {
    
    
    let collectionVar = this.state.collectionStat;
    inputArray = collectionVar.collections
   
    let allGalleries = Object.keys(this.state.collectionStat).map((gallery, index) => {
      return (
          <Box 
          gallery={this.state.collectionStat[gallery]} 
          key={index}
          label={this.state.collectionStat[gallery].label} 
          />
      )
    }) 
    console.log('this.state.collectionStat', this.state.collectionStat)
    return (
      <div>
        <h1> {searchTerm} Collections: </h1>
        {allGalleries}
      </div>
    );
  }
}
export default Boxholder;


