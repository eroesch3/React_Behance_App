import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    
        return (

                    <div className="header" >

                    <div className="header-title">
                    <Link to="/">{'<<'}</Link> 
                        <h2>Des<em>&#124;</em>gn Collections</h2>
                    </div>
                    <div className="header-second">
                        <h3>Powered By Behance</h3>
                    </div>
                </div>
                );
            }
            
            
            export default Header
            
            
            
