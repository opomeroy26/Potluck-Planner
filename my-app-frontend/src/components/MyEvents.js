import React from 'react';
import EventCard from "./EventCard"
import '../App.css'

function MyEvents({events, handleDeleteClick}) {
    const event = events.map((eventObj) => (
        <EventCard
            key={eventObj.id}
            event={eventObj}
            handleDeleteClick={handleDeleteClick}

        />
    ))
    return (
        <div className='row content d-flex justify-content-center m-2 p-2' id="shoplistheader">
        <h2>MyEvents</h2>
        {event}
        </div>
    )
}

export default MyEvents;