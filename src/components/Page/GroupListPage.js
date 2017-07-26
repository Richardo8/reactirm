import React, { Component } from 'react'
import GroupList from "../List/GroupList/GroupList";
import SearchBar from "../Search/SearchBar";
import "../Search/SearchBar.css";

export default class GroupListPage extends Component {
    render(){
        return (
            <div>
                <SearchBar/>
                <GroupList/>
            </div>
        )
    }
}