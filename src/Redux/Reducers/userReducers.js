import { combineReducers } from 'redux'
import { GET_USERS_RECEIVE} from "../Action/userAction"

function posts(state = {}, action) {
    switch (action.type) {
        case GET_USERS_RECEIVE:
            return Object.assign({}, state, {
                items: action.posts
            })
        default:
            return state
    }
}

function postsBySubreddit(state = { }, action) {
    switch (action.type) {
        case GET_USERS_RECEIVE:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

const rootReducers = combineReducers({
    postsBySubreddit
})

export default rootReducers