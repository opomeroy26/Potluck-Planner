import React from 'react';
import EventCard from "./EventCard"

function MyEvents({myEvents}){
    // const myEvent = myEvents.map((eventObj) => (
    //     <EventCard
    //         key={eventObj.id}
    //         event={eventObj}
    //     />
    // ))
    return (
        <div className='row content d-flex justify-content-center m-2 p-2'>
            <h2>MyEvents</h2>
            {/* {myEvent} */}
        </div>
        )
    }
    

export default MyEvents;