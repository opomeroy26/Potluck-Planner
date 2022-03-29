import React from 'react'

function EventCard({event}){
    const {event_name, host, details, date, food_suggestions, image } = event

    return(
        <div className="card border-light col-4 p-2 m-2 item" style={{ width: '35rem'}}>
            <img variant="top" src={image} alt={event_name} />
            <div className="card-body">
                <h3 className="card-title">{event_name}</h3>
                <h4 className="card-text">Hosted by: {host} on {date}</h4>
                <h4 className="card-text">{details}</h4>
            </div>
            <div className="list-group-flush">
                <ul>{food_suggestions}</ul> 
                {/* Need to put it in nested array if I want to check off the items or put them into list form */}
                {/* <li>Two</li>
                <li>Three</li> */}
            </div>
            <div>
                <button>Press me</button>
                <button>Remind me later
                </button>
            </div>
        </div>
    )
}

export default EventCard;