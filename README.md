# Project Description: React_Behance_App
This app pulls in images and creator names from the Behance API and renders them using React.

## Wireframe
![Wireframe](https://i.imgur.com/pVnp2X3.jpg)

## Screenshot
![Screenshot from App](https://i.imgur.com/dqDlvKr.png)

## MVP/PostMVP
#### MVP
* Find and use external api
* Render images and authors on page
#### PostMVP    
* Welcome page with navigation
* Dropdown menu for category selection

## React Component Hierarchy
* Index.js renders App.js
* App.js renders Welcome component
* Welcome component renders:
    * Header, including navigation via React Router
    * React-Strap Dropdown menu with 15 collection categories
    * Conditionally renders Boxholder component to display collection images and authors (i.e. the Box Components)
    * Footer
* Boxholder component:
    * Renders category-specific Box Components containing collection images and authors
    * Maintains state for user-selected category, api url and api data
    * Makes fetch api request to Behance api
* Box component renders the first image from a creators projects from the Poster component, plus the creator's name
* Poster component produces the Box image from Behance's api structure 

## Additional Libraries
* Used a React-Strap drop down menu to gain experience with that library.

## Code Snippet
* The Behance api request presented two challenges.  
    * First, had to use 'https://thingproxy.freeboard.io/fetch/' preceeding the desired api endpoint url due to CORS restrictions on JS api requests to the site.
    * Second, api response was wrapped such that map function was unavailable using typical approaches.  Object.keys (below) used to produce a usable array from the api response object:

let allGalleries = Object.keys(this.state.collectionData).map((gallery, index) => {
      return (
        <Box
          gallery={this.state.collectionData[gallery]}
          key={index}
          label={this.state.collectionData[gallery].label}
        />
      )
    })
