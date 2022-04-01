import React from "react";
import EventCard from "./EventCard";
import CommentsCard from "./CommentsCard";

function Holidays({holidays}){

    
    const holiday = holidays.events.map((holidayObj) => (
        <EventCard 
            key={holidayObj.id}
            event={holidayObj}

        />
    ))
    return(
        <div className='row content d-flex justify-content-center m-2 p-2'>
            {holiday}
        </div>
    )
}

export default Holidays;