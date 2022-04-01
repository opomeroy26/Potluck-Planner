import React from 'react';
import EventCard from "./EventCard";

function HomePage({events, handleDeleteClick, handleAddToCommentsList}) {
    const event = events.map((eventObj) => (
        <EventCard
            key={eventObj.id}
            event={eventObj}
            handleDeleteClick={handleDeleteClick}
            handleAddToCommentsList={handleAddToCommentsList}
        />
    ))
    return (
        <div className='row content d-flex justify-content-center m-2 p-2'>
        {event}
        </div>
    )
}

export default HomePage 