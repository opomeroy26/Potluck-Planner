import React, {useState} from 'react'
import '../App.css'

function EventCard({event, handleDeleteClick}){
    const {event_name, host, details, date, food_suggestions, image, } = event

    const [style, setStyle] = useState("button")
    const [style2, setStyle2] = useState("button")

    const changeStyle = () => {
        if (style === "button") {
            return setStyle("button3")
        } else {
            return setStyle("button")
        }
    }

    const changeStyle2 = () => {
        if (style2 === "button") {
            return setStyle2("button2")
        } else {
            return setStyle2("button")
        }
    }



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
                <div className="EventCard">
                    <button className={style} onClick={changeStyle}>Attending</button> 
                    
                    <button className={style2} onClick={changeStyle2}>Not attending</button>
                    
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