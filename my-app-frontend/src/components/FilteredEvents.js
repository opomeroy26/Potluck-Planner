import React from "react";
import EventCard from "./EventCard";

function FilteredEvents({filteredEvents}){
    const filtEvent = filteredEvents.map((holidayObj) => (
        <EventCard 
            key={holidayObj.id}
            event={holidayObj}

        />
    ))
    return(
        <div className='row content d-flex justify-content-center m-2 p-2'>
            {filtEvent}
        </div>
    )
}

export default FilteredEvents;