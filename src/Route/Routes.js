import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserList from "../components/List/UserList/UserList";

export default class Routes extends React.Component {
    render(){
        return (
            <Router>
                <Route exact path="/userlist" component={UserList}/>
            </Router>
        )
    }
}