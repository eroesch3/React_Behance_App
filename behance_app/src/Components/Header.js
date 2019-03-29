import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

    return (

        <div className="header" >

            {window.location.pathname.slice(1).length > 0 && <Link className="homelink" to="/">{'<<'}</Link>}
            <div className="header-title">
                <h2>Des<em>&#124;</em>gn Collections</h2>
            </div>
            <div className="header-second">
                <h3>Powered By Behance</h3>
            </div>
        </div>
    );
}

export default Header



