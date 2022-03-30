import React from "react";
import EventCard from "./EventCard";

function Holidays({holidays}){
    const holiday = holidays.events.map((holidayObj) => (
        <EventCard 
            key={holidayObj.id}
            event={holidayObj}

        />
    ))
    return(
        <div>
            {holiday}
        </div>
    )
}

export default Holidays;