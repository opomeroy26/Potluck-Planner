import React, {useEffect, useState} from "react";
import SideBar from "./SideBar";
import CreateEvent from "./CreateEvent";
import Header from "./Header";
import HomePage from "./HomePage";
import MyEvents from "./MyEvents";
import SavedEvents from "./SavedEvents";
import ShoppingList from "./ShoppingList";
import Holidays from "./Holidays";
import Celebrations from './Celebrations';
import Birthdays from "./Birthdays";
import Miscellaneous from "./Miscellaneous";
import FilteredEvents from "./FilteredEvents";
import {Switch, Route} from "react-router-dom";
import {useHistory} from "react-router-dom";
import '../App.css';
import '../index.css';
import '../Styles/SideBar.css'

function App() {
    const [events, setEvents] = useState([])
    const history = useHistory();
    const [myEvents, setMyEvents] = useState([])
    const [holidays, setHolidays] = useState([])
    const [celebrations, setCelebrations] = useState([])
    const [birthdays, setBirthdays] = useState([])
    const [miscellaneous, setMiscellaneous] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [shoppingList, setShoppingList] = useState([])

    useEffect(()=> {
        fetch("http://localhost:9292/events")
        .then((r) => r.json())
        .then(setEvents)
    }, [])

    useEffect(()=> {
        fetch("http://localhost:9292/myevents")
        .then((r)=> r.json())
        .then(setMyEvents)
    }, [])

    useEffect(()=> {
        fetch("http://localhost:9292/categories/85")
        .then((r)=> r.json())
        .then(setHolidays)
    }, [])

    useEffect(()=> {
        fetch("http://localhost:9292/categories/86")
        .then((r)=> r.json())
        .then(setBirthdays)
    },[])

    useEffect(()=> {
        fetch("http://localhost:9292/categories/87")
        .then((r)=> r.json())
        .then(setCelebrations)
    },[])

    useEffect(()=> {
        fetch("http://localhost:9292/categories/88")
        .then((r)=> r.json())
        .then(setMiscellaneous)
    },[])

    useEffect(()=> {
        fetch("http://localhost:9292/events/order")
        .then((r) => r.json())
        .then(setFilteredEvents)
    },[])

    useEffect(() => {
        fetch("http://localhost:9292/shoppinglist")
        .then((r)=> r.json())
        .then(setShoppingList)
    }, [])

    function onDeleteClick(event){
        console.log("deleting event", event)
        fetch(`http://localhost:9292/events/${event.id}`, {method: "DELETE"})
        fetch(`http://localhost:9292/myevents/${event.id}`, {method: "DELETE"})
        setEvents(events.filter((eventItem) => eventItem !== event))
        setMyEvents(myEvents.filter((eventItem)=> eventItem !== event))
 
    }

    function onHolidayClick(){
            history.push('/holidays')
            console.log("holiday clicked")
        }
    
    function onCelebrationsClick(){
        history.push('/celebrations')
    }

    function onAllEventsClick(){
        history.push('/')
    }

    function onBirthdaysClick(){
        history.push('/birthdays')
    }

    function onMiscellaneousClick(){
        history.push('/miscellaneous')
    }

    function onReturnToFeedClick(){
        history.push('/')
    }

    function onFilterDateClick(){
        history.push('/eventsbydate')
    }

    function onAddToEventsFeed(event){
        history.push('/')
        console.log("adding to events")
        setEvents([...events, event])
    }

    function onAddToMyEvents(event){
        console.log("adding to your events page")
        setMyEvents([event, ...myEvents])
    }

    function onAddToMyShoppingList(item){
        // e.preventDefault()
        console.log("adding to shopping list")
        setShoppingList([...shoppingList, item])

    }

    function onShoppingListDelete(item){
        console.log("deleting", item.id)
        fetch(`http://localhost:9292/shoppinglist/${item.id}`, {method: "DELETE"})
        setShoppingList(shoppingList.filter((listItem)=> listItem !==item))
    }


    return (
    <div className="App">
        <Header />
        <SideBar 
            handleHolidayClick = {onHolidayClick}
            handleAllEventsClick = {onAllEventsClick}
            handleCelebrationsClick = {onCelebrationsClick}
            handleBirthdaysClick= {onBirthdaysClick}
            handleMiscellaneousClick={onMiscellaneousClick}
            handleFilterDateClick={onFilterDateClick}
        />
        <div className='app-body-container'>

        <Switch>
            <Route exact path ="/">
                <HomePage 
                    events = {events}
                    handleDeleteClick = {onDeleteClick}
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
                    handleDeleteClick = {onDeleteClick}
                />
            </Route>

            <Route exact path = "/savedevents">
                <SavedEvents />
            </Route>

            <Route exact path = "/shoppinglist">
                <ShoppingList 
                    shoppingList = {shoppingList}
                    handleAddToShoppingList = {onAddToMyShoppingList}
                    handleShoppingListDelete = {onShoppingListDelete}
                />
            </Route>



            <Route exact path ="/holidays">
                <Holidays 
                    holidays = {holidays}
                />
            </Route>

            <Route exact path="/celebrations">
                <Celebrations
                    celebrations = {celebrations}
                />
            </Route>

            <Route exact path="/birthdays">
                <Birthdays
                    birthdays = {birthdays}
                />
            </Route>

            <Route exact path="/miscellaneous">
                <Miscellaneous
                    miscellaneous = {miscellaneous}
                />
            </Route>

            <Route exact path="/eventsbydate">
                <FilteredEvents
                    filteredEvents = {filteredEvents}
                />
            </Route>



        </Switch>
        
    </div>
    </div>

    )

}

export default App; 