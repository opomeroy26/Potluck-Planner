import React from "react";
import EventCard from "./EventCard";

function Birthdays({birthdays}){
    const birthday = birthdays.events.map((holidayObj) => (
        <EventCard 
            key={holidayObj.id}
            event={holidayObj}

        />
    ))
    return(
        <div className='row content d-flex justify-content-center m-2 p-2'>
            {birthday}
        </div>
    )
}

export default Birthdays;