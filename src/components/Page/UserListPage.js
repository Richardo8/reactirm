import React, { Component } from 'react'
import UserList from "../List/UserList/UserList";
import SearchBar from "../Search/SearchBar";

export default class UserListPage extends Component {
    render(){
        return (
            <div>
                <SearchBar/>
                <UserList/>
            </div>
        )
    }
}