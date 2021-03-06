import React, { Component } from 'react'
import Box from './Box.js';
let searchTerm = '';
let inputArray = [];

class Boxholder extends Component {
  constructor(props) {

    super(props)
    this.state = {
      searchTerm: 'ArtDirection',
      url: '',
      collectionData: '',
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
        this.setState({ collectionData: json.collections })
      }
      )
  }

  render() {
    let collectionVar = this.state.collectionData;
    inputArray = collectionVar.collections

    let allGalleries = Object.keys(this.state.collectionData).map((gallery, index) => {
      return (
        <Box
          gallery={this.state.collectionData[gallery]}
          key={index}
          label={this.state.collectionData[gallery].label}
        />
      )
    })

    return (
      <div>
        <div className="collection-title">
          <h1> {searchTerm} Collections: </h1>
        </div>
        <br></br>
        <div className="boxholder">
          {allGalleries}
        </div>
      </div>
    );
  }
}
export default Boxholder;


