export const GET_USERS_REQUEST = 'GET_ALL_USERS_REQUEST'
export const GET_USERS_RECEIVE = 'GET_ALL_USERS_RECEIVE'
// export const GET_SEARCH_USERS_REQUEST = 'GET_SEARCH_USERS_REQUEST'
// export const GET_SEARCH_USERS_RECEIVE = 'GET_SEARCH_USERS_RECEIVE'

function requestPosts(subreddit) {
    return {
        type: GET_USERS_REQUEST,
        subreddit
    }
}

function receivePosts(subreddit, json) {
    return {
        type: GET_USERS_RECEIVE,
        subreddit,
        posts: json.data.children.map(child => child.data),
    }
}

export function fetchPosts(subreddit) {
    return async dispatch => {
        dispatch(requestPosts(subreddit))
        let res = await fetch(`/userlist`)
        let resJson = res.json()
        return dispatch(receivePosts(subreddit, resJson))
    }
}

