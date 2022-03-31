import React from 'react'

function EventCard({event, handleDeleteClick}){
    const {event_name, host, details, date, food_suggestions, image, } = event


    // Assuming logged in as username "Olivia". Will need to be more dynamic based off user later on
    if (host === "Olivia") {
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
                    <button onClick={()=>handleDeleteClick(event)}>Delete Event</button>
                    <form id="comment-form" className="comment-form">
                        <input
                            className="comment-input"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Add a comment"
                        />
                        <button className="comment-button" type="submit">Post</button>
                    </form>

                </div>
            </div>
        )

    } else {
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
                    <button>Attending</button> <button>Not attending</button>
                    <form id="comment-form" className="comment-form">
                        <input
                            className="comment-input"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Add a comment"
                        />
                        <button className="comment-button" type="submit">Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EventCard;