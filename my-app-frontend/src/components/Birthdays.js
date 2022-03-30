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
        <div>
            {birthday}
        </div>
    )
}

export default Birthdays;