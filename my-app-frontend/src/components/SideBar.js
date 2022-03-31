import React from 'react';
import '../Styles/SideBar.css'
import '../App.css'
import {NavLink} from "react-router-dom"

function SideBar({handleHolidayClick, handleAllEventsClick, handleCelebrationsClick, handleBirthdaysClick, handleMiscellaneousClick, handleFilterDateClick}){


    return(
        <div>
            <nav id ='sidebar'>
                <ul className= 'list-unstyled componenets' id='homeSubmenu'>
                {/* <button activestyle = {{background: "white", color:"green"}} className="btn m5" id="btn" onClick={handleAllEventsClick}>Home 🏠</button> */}
                <NavLink to="/" exact activeStyle = {{background: "white", color:"green"}} className='btn m-3' id="btn-two">Home 🏠</NavLink>
                    <NavLink to="/createevent" exact activeStyle = {{background: "white", color:"green"}} className='btn  m-3' id="btn-two">Create New Event ➕</NavLink>
                    <NavLink to="/shoppinglist" exact activeStyle = {{background: "white", color:"green"}} className='btn m-3' id="btn-two">Shopping List 🛒</NavLink>
                    <NavLink to="/myevents" exact activeStyle = {{background: "white", color:"green"}} className='btn m-3' id="btn-two">My Events 📓</NavLink>
                </ul>
                {/* <ul className='list-unstyled components' id="homeSubmenu"> */}
                {/* <NavLink to="/holidays" exact activeStyle = {{background: "white", color:"green"}} className='btn m-2' id="btn-two">Holidays</NavLink>
                <NavLink to="/birthdays" exact activeStyle = {{background: "white", color:"green"}} className='btn m-2' id="btn-two">Birthdays</NavLink>
                <NavLink to="/celebrations" exact activeStyle = {{background: "white", color:"green"}} className='btn m-1' id="btn-two">Celebrations</NavLink>
                <NavLink to="/miscellaneous" exact activeStyle = {{background: "white", color:"green"}} className='btn m-1' id="btn-two">Miscellaneous</NavLink>
                <NavLink to="/eventsbydate" exact activeStyle = {{background: "white", color:"green"}} className='btn m-1' id="btn-two">Sort by Soonest</NavLink> */}


                
                    {/* <button onClick={handleHolidayClick}>Holidays</button>
                    <button onClick={handleBirthdaysClick}>Birthdays</button>
                    <button onClick={handleCelebrationsClick}>Celebrations</button>
                    <button onClick={handleMiscellaneousClick}>Miscellaneous</button>
                
        
                    <div>
                        <button onClick={handleFilterDateClick}>filter Feed by date</button>
                    </div> */}
            {/* </ul> */}

            </nav>
        </div>
    )
}

export default SideBar;