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
        dispatch(fetchPosts(selectedSubreddit, {}, '/userlist'))
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
    const { selectedSubreddit, postsBySubreddit } = state
    console.log(state)
    const {items: posts} = postsBySubreddit[selectedSubreddit] || {items: []}

    // 需要返回selectedSubreddit以作为参数传入方法，避免发生undefined的错误
    return {
        selectedSubreddit,
        posts
    }
}

export default connect(mapStateToProps)(UserListPage)