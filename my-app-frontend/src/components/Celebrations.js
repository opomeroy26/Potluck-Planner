import React from "react";
import EventCard from "./EventCard";

function Celebrations({celebrations}){
    const celebration = celebrations.events.map((holidayObj) => (
        <EventCard 
            key={holidayObj.id}
            event={holidayObj}

        />
    ))
    return(
        <div>
            {celebration}
        </div>
    )
}

export default Celebrations;