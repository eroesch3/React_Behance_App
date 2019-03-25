import React, { Component } from 'react'
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
           <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="architecture">Architecture
                    </Dropdown.Item> <br></br>
                    <Dropdown.Item href="interiordesign">Interior Design</Dropdown.Item><br></br>

                    <Dropdown.Item href="productdesign">Product Design</Dropdown.Item><br></br>
                    </Dropdown.Menu>
            </Dropdown>

        </div>
      )
    }  
}

export default Welcome;