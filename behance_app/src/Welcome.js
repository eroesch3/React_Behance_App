import React, { Component } from 'react'
import Boxholder from './Boxholder.js'
import { Link } from "react-router-dom"
// import PlanetDetail from './PlanetDetail';
import {
  Route,
  // Redirect,
  // Switch
 } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

class Welcome extends Component {
    

render() {
    
      return (
        <div className="dropdown">
           Welcome Page 
           
           <Dropdown className="dropdown-link">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {/* <Dropdown.Item href="Architecture">Architecture
                    </Dropdown.Item> <br></br> */}

                    <Dropdown.Item href="ArtDirection">Art Direction</Dropdown.Item><br></br>

                    <Dropdown.Item href="AutomotiveDesign">Automotive Design</Dropdown.Item><br></br>

                    <Dropdown.Item href="Charicature">Charicature</Dropdown.Item><br></br>
                    
                    <Dropdown.Item href="CharacterDesign">Character Design</Dropdown.Item><br></br>
                    
                    <Dropdown.Item href="ComputerAnimation">Computer Animation</Dropdown.Item><br></br>

                    <Dropdown.Item href="CreativeDirection">Creative Direction</Dropdown.Item><br></br>

                    <Dropdown.Item href="EditorialDesign">Editorial Design</Dropdown.Item><br></br>

                    <Dropdown.Item href="ExhibitionDesign">Exhibition Design</Dropdown.Item><br></br>

                    <Dropdown.Item href="FurnitureDesign">Furniture Design</Dropdown.Item><br></br>

                    <Dropdown.Item href="IconDesign">Icon Design</Dropdown.Item><br></br>

                    <Dropdown.Item href="MakeUpArts">Make Up Arts</Dropdown.Item><br></br>

                    <Dropdown.Item href="PatternDesign">Pattern Design</Dropdown.Item><br></br>

                    {/* <Dropdown.Item href="Poster">Poster Design</Dropdown.Item><br></br> */}
                    
                    <Dropdown.Item href="ToyDesign">Toy Design</Dropdown.Item><br></br>

                    <Dropdown.Item href="Typography">Typography</Dropdown.Item><br></br>

                    <Dropdown.Item href="WebDevelopment">Web Development</Dropdown.Item><br></br>

                    
                    </Dropdown.Menu>
            </Dropdown>
            

            {window.location.pathname.slice(1).length > 0 && <Boxholder />}


        </div>
      )
    }  
}

export default Welcome;