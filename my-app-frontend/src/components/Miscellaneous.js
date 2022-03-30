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
        <div className='row content d-flex justify-content-center m-2 p-2'>
            {mis}
        </div>
    )
}

export default Miscellaneous;