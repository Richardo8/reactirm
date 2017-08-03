import React, { Component } from 'react'
import UserList from "../List/UserList/UserList";
import SearchBar from "../Search/SearchBar";

export default class UserListPage extends Component {
    state = {
        data: null,
    };

    componentWillMount(){
        this.getData();
    }

    async getData() {
        let data = await fetch('/userlist');
        let dataJson = await data.json();
        this.setState({ data: dataJson});
    }

    render(){
        return (
            <div>
                <SearchBar data={this.state.data}/>
                <UserList  data={this.state.data}/>
            </div>
        )
    }
}