import React, { Component } from 'react'
import Boxholder from './Boxholder.js'
import { Link } from "react-router-dom"
import {
  Route,
  // Redirect,
  // Switch
 } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import Header from './Header.js'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: 'true',
     }
    
     this.removeDropDown = this.removeDropDown.bind(this)
    }
  
    removeDropDown() {
      console.log('onfocusout triggering');
      this.setState(prevState => ({
        showMenu: !prevState.showMenu
      }));

    }
      // showMenu = 'false';
      // this.setState( {showMenu: 'false'} )
      // window.location.reload()
      // return showMenu;
  



render() {
    
      return (
        <div className="dropdown">
          <Header/>
           {/* {window.location.pathname.slice(1).length > 0 && <Boxholder />} */}
            {/* {console.log('from 37 in Render', showMenu)} */}

           <Dropdown> 
                <Dropdown.Toggle className="button" variant="success" id="dropdown-basic" >
                    Category
                </Dropdown.Toggle >
                { console.log('from line 49 in Dropdown', this.state.showMenu)} 

            <Dropdown.Menu  className="dropdown-link"   >

            {/* onBlur={()=>this.removeDropDown()} */}


                    <Dropdown.Item href="ArtDirection">Art Direction</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="AutomotiveDesign">Automotive Design</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="Charicature">Charicature</Dropdown.Item><br></br><br></br>
                    
                    <Dropdown.Item href="CharacterDesign">Character Design</Dropdown.Item><br></br><br></br>
                    
                    <Dropdown.Item href="ComputerAnimation">Computer Animation</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="CreativeDirection">Creative Direction</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="EditorialDesign">Editorial Design</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="ExhibitionDesign">Exhibition Design</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="FurnitureDesign">Furniture Design</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="IconDesign">Icon Design</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="MakeUpArts">Make Up Arts</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="PatternDesign">Pattern Design</Dropdown.Item><br></br><br></br>

                    {/* <Dropdown.Item href="Poster">Poster Design</Dropdown.Item><br></br> */}
                    
                    <Dropdown.Item href="ToyDesign">Toy Design</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="Typography">Typography</Dropdown.Item><br></br><br></br>

                    <Dropdown.Item href="WebDevelopment">Web Development</Dropdown.Item><br></br><br></br>

                    
                    </Dropdown.Menu>
            </Dropdown>
            

            {window.location.pathname.slice(1).length > 0 && <Boxholder />}


        </div>
      )
    }  
  
}

export default Welcome;