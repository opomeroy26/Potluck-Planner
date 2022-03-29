import React from 'react';
import '../Styles/SideBar.css'
import '../App.css'
import {NavLink} from "react-router-dom"

function SideBar(){


    return(
        <div>
            <nav id ='sidebar'>
                <ul className= 'list-unstyled componenets' id='homeSubmenu'>
                    <h1>SideBar</h1>
                    <NavLink to="/createevent" exact activeStyle = {{background: "white", color:"red"}} className='btn btn-secondary m-3'>Create New Event</NavLink>
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