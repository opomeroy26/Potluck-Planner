import React from 'react';
import '../Styles/SideBar.css'
import '../App.css'
import {NavLink} from "react-router-dom"

function SideBar({handleHolidayClick, handleAllEventsClick, handleCelebrationsClick, handleBirthdaysClick, handleMiscellaneousClick, handleFilterDateClick}){


    return(
        <div>
            <nav id ='sidebar'>
                <ul className= 'list-unstyled componenets' id='homeSubmenu'>
                    
                    <NavLink to="/createevent" exact activeStyle = {{background: "white", color:"green"}} className='btn btn-secondary m-3'>Create New Event</NavLink>
                    <button onClick={handleAllEventsClick}>Home</button>
                    <button onClick={handleHolidayClick}>Holidays</button>
                    <button onClick={handleBirthdaysClick}>Birthdays</button>
                    <button onClick={handleCelebrationsClick}>Celebrations</button>
                    <button onClick={handleMiscellaneousClick}>Miscellaneous</button>
                    <NavLink to="/myevents" exact activeStyle = {{background: "white", color:"green"}} className='btn btn-secondary m3'>My Events</NavLink>
                    <NavLink to="/shoppinglist" exact activeStyle = {{background: "white", color:"green"}} className='btn btn-secondary m3'>Shopping List</NavLink>
                    <div>
                        <button onClick={handleFilterDateClick}>filter Feed by date</button>
                    </div>
            </ul>
            </nav>
        </div>
    )
}

export default SideBar;