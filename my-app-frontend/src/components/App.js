import React, {useEffect, useState} from "react";
import SideBar from "./SideBar";
import CreateEvent from "./CreateEvent";
import Header from "./Header";
import HomePage from "./HomePage";
import MyEvents from "./MyEvents";
import SavedEvents from "./SavedEvents";
import {Switch, Route} from "react-router-dom";
import {useHistory} from "react-router-dom";
import '../App.css';
import '../index.css';
import '../Styles/SideBar.css'

function App() {
    const [events, setEvents] = useState([])
    const history = useHistory();
    const [myEvents, setMyEvents] = useState([])

    useEffect(()=> {
        fetch("http://localhost:9292/events")
        .then((r) => r.json())
        .then(setEvents)
    }, [])

    function onReturnToFeedClick(){
        history.push('/')
    }

    function onAddToEventsFeed(event){
        history.push('/')
        console.log("adding to events")
        setEvents([...events, event])
    }

    function onAddToMyEvents(event){
        console.log("adding to your events page")
        setMyEvents([...events, event])
    }


    return (
    <div className="App">
        <Header />
        <SideBar />
        <div className='app-body-container'>

        <Switch>
            <Route exact path ="/">
                <HomePage 
                    events = {events}
                />
            </Route>

            <Route exact path = '/createevent'>
                <CreateEvent 
                    handleAddToEventsFeed = {onAddToEventsFeed}
                    handleReturnToFeed = {onReturnToFeedClick}
                    handleAddToMyEvents = {onAddToMyEvents}
                />
            </Route>

            <Route exact path = "/myevents">
                <MyEvents 
                    events = {myEvents}
                />
            </Route>

            <Route exact path = "/savedevents">
                <SavedEvents />
            </Route>

        </Switch>
        
    </div>
    </div>

    )

}

export default App; 