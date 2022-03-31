import React, {useState} from 'react'
import Form from "./Form"
import '../App.css'

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
        fetch("http://localhost:9292/myevents", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
        // .then(handleAddToEventsFeed(formState))
        .then(handleAddToMyEvents(formState))
        // .then(setFormState(initialFormState))


        fetch("http://localhost:9292/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
        .then(handleAddToEventsFeed(formState))
        // .then(handleAddToMyEvents(formState))
        .then(setFormState(initialFormState))


    }


    return(
        <div className='row content d-flex justify-content-center m-2 p-2' id="eventpage">

            <Form handleChange={handleChange} handleSubmit={handleSubmit} formState={formState}/>
            <div>
                <button id='btn' onClick={handleReturnToFeed}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateEvent;