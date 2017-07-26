import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import UserList from "../components/List/UserList/UserList";
import SearchBar from "../components/Search/SearchBar";


export default class Routes extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route path="/userlist" component={SearchBar}/>
                    <Route exact path="/" component={UserList}/>
                </div>
            </Router>
        )
    }
}