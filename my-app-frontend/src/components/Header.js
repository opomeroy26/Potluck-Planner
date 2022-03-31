import React from 'react'
import {NavLink} from "react-router-dom"

function Header(){

    return(
        <div>
            
        <header className ="App-header">
            <div>
                <div className="header-name">
                    <h2 >Potluck Planner</h2>
                </div>
                <div>
                <NavLink to="/eventsbydate" exact activeStyle = {{background: "white", color:"green"}} className='btn m-1' id="btn-two">Soonest</NavLink>
                <NavLink to="/holidays" exact activeStyle = {{background: "white", color:"green"}} className='btn m-2' id="btn-two">Holidays</NavLink>
                <NavLink to="/birthdays" exact activeStyle = {{background: "white", color:"green"}} className='btn m-2' id="btn-two">Birthdays</NavLink>
                <NavLink to="/celebrations" exact activeStyle = {{background: "white", color:"green"}} className='btn m-1' id="btn-two">Celebrations</NavLink>
                <NavLink to="/miscellaneous" exact activeStyle = {{background: "white", color:"green"}} className='btn m-1' id="btn-two">Miscellaneous</NavLink>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Header;