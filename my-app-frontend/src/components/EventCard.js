import React, {useState} from 'react'
import '../App.css'
import CommentsCard from './CommentsCard'

function EventCard({event, handleDeleteClick, handleAddToCommentsList}){
    const {event_name, host, details, date, food_suggestions, image,} = event

    // const commenting = event.comments.map((commentObj) => (
    //     <CommentsCard
    //         key={commentObj.id}
    //         commentObj={commentObj}
    //     />
    // ))

    const initialListBox = {
    comment:'',
}

const [listBox, setListBox]=useState(initialListBox)

const handleListChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target.value)
    setListBox(listBox=>({...listBox, [name]: value}))
}


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

    function onCommentSubmit(e){
        // e.preventDefault()
        // console.log("adding to comments list", e.target)
        // fetch("http://localhost:9292/shoppinglist", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(listBox)
        // })
        // .then(handleAddToShoppingList(listBox))
        // .then(setListBox(initialListBox))
        (handleAddToCommentsList(e, listBox))
        setListBox(initialListBox)
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
                </div>
                <div>
                    <button onClick={()=>handleDeleteClick(event)}>Delete Event</button>
                    <form id="comment-form" className="comment-form" onSubmit={onCommentSubmit}>
                        <input
                            className="comment-input"
                            type="text"
                            name="comment"
                            id="comment"
                            value={listBox.comment}
                            placeholder="Add a comment"
                            onChange={handleListChange}
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
                </div>
                <div className="EventCard">
                    <div>
                        <button className={style} onClick={changeStyle}>Attending</button> 
                        <button className={style2} onClick={changeStyle2}>Not attending</button>
                    </div>
                    <div className="list-group-flush"></div>
                </div>
                {/* {commenting} */}
                <form id="comment-form" className="comment-form" onSubmit={onCommentSubmit}>
                        <input
                            className="comment-input"
                            type="text"
                            name="comment"
                            id="comment"
                            placeholder="Add a comment"
                            value={listBox.comment}
                            onChange={handleListChange}
                        />
                        <button className="comment-button" type="submit">Post</button>
                    </form>
            </div>
        )
    }
}

export default EventCard;




