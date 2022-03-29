import React from 'react'

function EventCard(){

    return(
        <div className="card border-light col-4 p-2 m-2 item" style={{ width: '35rem'}}>
            <img variant="top" src="holder.js/100px180?text=Image cap" alt="name" />
            <div className="card-body">
                <h3 className="card-title">Test</h3>
                <h4 className="card-text">Please work</h4>
            </div>
            <div className="list-group-flush">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </div>
            <button>Press me</button>
            <button>Press me too</button>
        </div>
    )
}

export default EventCard;