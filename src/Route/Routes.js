import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from "../components/Index/Index";
import UserListPage from "../components/Page/UserListPage";


export default class Routes extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Index}/>
                    <Route path="/userlist" component={UserListPage}/>
                </div>
            </Router>
        )
    }
}