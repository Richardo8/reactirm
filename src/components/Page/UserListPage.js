import React, { Component } from 'react'
import UserList from "../List/UserList/UserList";
import SearchBar from "../Search/SearchBar";
import { connect } from 'react-redux'
import fetchPosts from '../../Redux/Action/userAction'

class UserListPage extends Component {
    // state = {
    //     data: [],
    // };

    componentWillMount(){
        // this.getData();
        // console.log(this.props)
        // const { dispatch, selectedSubreddit } = this.props
        // dispatch(fetchPosts(selectedSubreddit))
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPosts(selectedSubreddit))
    }

    // 如果使用redux的话兄弟组件之间通信就不需要子传父父再传子
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
        const { posts } = this.props
        return (
            <div>
                <SearchBar setCurrentContent={this.setCurrentContent}/>
                <UserList  data={posts}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { postsBySubreddit } = state
    const {items: posts} = postsBySubreddit.undefined || {items: []}

    return {
        posts
    }
}

export default connect(mapStateToProps)(UserListPage)