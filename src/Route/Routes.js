import React from 'react'
import { Route } from 'react-router-dom'
import Index from "../components/Index/Index";
import UserListPage from "../components/Page/UserListPage";


export default class Routes extends React.Component {
    render(){
        return (
                <div>
                    <Route exact path="/" component={Index}/>
                    <Route path="/userlist" component={UserListPage}/>
                </div>
        )
    }
}