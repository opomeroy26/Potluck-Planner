import React from 'react';
import '../Styles/SideBar.css'
import '../App.css'

function SideBar(){
    return(
        <div>
            <nav id ='sidebar'>
                <ul className= 'list-unstyled componenets' id='homeSubmenu'>
                    <h1>SideBar</h1>
                    <button>Create new Event</button>
                    <li>Holidays</li>
                    <li>Birthdays</li>
                    <li>Celebrations</li>
                    <li>Miscellaneous</li>
                    <button>filterbydate</button>
            </ul>
            </nav>
        </div>
    )
}

export default SideBar;