import React from "react";
import SideBar from "./SideBar";
import CreateEvent from "./CreateEvent";
import Header from "./Header";
import HomePage from "./HomePage";
import MyEvents from "./MyEvents";
import SavedEvents from "./SavedEvents";
import {Switch, Route} from "react-router-dom";
import '../App.css';
import '../index.css';
import '../Styles/SideBar.css'

function App() {
    return (
    <div className="App">
        <Header />
        <SideBar />
        <div className='app-body-container'>

        <Switch>
            <Route exact path ="/">
                <HomePage />
            </Route>

            <Route exact path = '/createevent'>
                <CreateEvent />
            </Route>

            <Route exact path = "/myevents">
                <MyEvents />
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