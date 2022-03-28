import React from 'react';
import '../Styles/SideBar.css'
import '../App.css'

function SideBar(){
    return(
        <div>
            <nav id ='sidebar'>
                <ul className= 'list-unstyled componenets' id='homeSubmenu'>
                    <h1>SideBar</h1>
                    <li>Link Somewhere</li>
                    <li>Another Link</li>
                    <li>Filters</li>
            </ul>
            </nav>
        </div>
    )
}

export default SideBar;