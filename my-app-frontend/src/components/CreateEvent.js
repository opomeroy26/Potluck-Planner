import React, {useState} from 'react'
import Form from "./Form"

function CreateEvent({handleAddToEventsFeed, handleReturnToFeed, handleAddToMyEvents}){

    const initialFormState = {
        event_name:'',
        host:'',
        details:'',
        date: '',
        food_suggestions:'',
        image:'',
        category:'',
    }

    const [formState, setFormState]=useState(initialFormState)

    const handleChange = (e)=> {
        const {name, value} = e.target;
        // console.log(e.target.value)
        setFormState(formState => ({...formState, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        fetch("http://localhost:9292/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
        .then(handleAddToEventsFeed(formState))
        .then(setFormState(initialFormState))
        // .then(handleAddToMyEvents(formState))


    }


    return(
        <div>
            <h1> Create your Event </h1>
            <button onClick={handleReturnToFeed}>Return to Feed</button>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} formState={formState}/>
        </div>
    )
}

export default CreateEvent;