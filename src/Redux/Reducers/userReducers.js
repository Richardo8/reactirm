import { combineReducers } from 'redux'
import { GET_USERS_RECEIVE} from "../Action/userAction"

// 该方法是用来选择selectedSubreddit的
function selectedSubreddit(state='post', action) {
    switch(action.type){
        default:
            return state
    }
}

function posts(state = {}, action) {
    switch (action.type) {
        case GET_USERS_RECEIVE:
            // return Object.assign({}, state, {
            //     items: action.posts
            // })
            // 使用对象展开运算符
            return {
                ...state,
                items: action.posts
            }
        default:
            return state
    }
}

function postsBySubreddit(state = { }, action) {
    switch (action.type) {
        case GET_USERS_RECEIVE:
            // return Object.assign({}, state, {
            //     [action.subreddit]: posts(state[action.subreddit], action)
            // })
            console.log(action)
            console.log(action.subreddit)
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

const rootReducers = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

export default rootReducers