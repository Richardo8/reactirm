export const GET_USERS_REQUEST = 'GET_ALL_USERS_REQUEST'
export const GET_USERS_RECEIVE = 'GET_ALL_USERS_RECEIVE'
// export const GET_SEARCH_USERS_REQUEST = 'GET_SEARCH_USERS_REQUEST'
// export const GET_SEARCH_USERS_RECEIVE = 'GET_SEARCH_USERS_RECEIVE'

// function requestPosts(subreddit) {
//     return {
//         type: GET_USERS_REQUEST,
//         subreddit
//     }
// }

function receivePosts(subreddit, json) {
    return {
        type: GET_USERS_RECEIVE,
        subreddit,
        posts: json.map(child => child),
    }
}

export default function fetchPosts(subreddit) {
    return async dispatch => {
        let res = await fetch(`/userlist`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
        let resJson = await res.json()
        return dispatch(receivePosts(subreddit, resJson))
    }
}

