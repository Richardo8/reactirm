import React from 'react'
import { Route } from 'react-router-dom'
import Index from "../components/Index/Index";
import UserListPage from "../components/Page/UserListPage";
import GroupListPage from "../components/Page/GroupListPage";


export default class Routes extends React.Component {
    render(){
        console.log(this.props)
        return (
                <div>
                    <Route exact path="/" component={Index}/>
                    <Route path="/userlist" component={UserListPage}/>
                    <Route path="/search" component={UserListPage}/>
                    <Route path="/grouplist" component={GroupListPage}/>
                </div>

        )
    }
}