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
        <div className='row content d-flex justify-content-center m-2 p-2'>
            {celebration}
        </div>
    )
}

export default Celebrations;