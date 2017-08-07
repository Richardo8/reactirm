import React, { Component } from 'react'
import UserList from "../List/UserList/UserList";
import SearchBar from "../Search/SearchBar";
import fetchPosts from '../../Redux/Action/userAction'

export default class UserListPage extends Component {
    state = {
        data: [],
    };

    componentWillMount(){
        // this.getData();
        // console.log(this.props)
        // const { dispatch, selectedSubreddit } = this.props
        // dispatch(fetchPosts(selectedSubreddit))
    }

    setCurrentContent = (value) => {
        console.log(value)
        this.setState({ data: value})
    }

    async getData() {
        let data = await fetch('/userlist');
        let dataJson = await data.json();
        this.setState({ data: dataJson});
    }

    render(){
        return (
            <div>
                <SearchBar setCurrentContent={this.setCurrentContent}/>
                <UserList  data={this.state.data}/>
            </div>
        )
    }
}