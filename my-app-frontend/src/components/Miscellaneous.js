import React from "react";
import EventCard from "./EventCard";

function Miscellaneous({miscellaneous}){
    const mis = miscellaneous.events.map((holidayObj) => (
        <EventCard 
            key={holidayObj.id}
            event={holidayObj}

        />
    ))
    return(
        <div>
            {mis}
        </div>
    )
}

export default Miscellaneous;