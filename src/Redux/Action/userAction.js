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

export default function fetchPosts(subreddit, data={}, url) {
    return async dispatch => {
        console.log(data)
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let resJson = await res.json()
        console.log(resJson)
        return dispatch(receivePosts(subreddit, resJson))
    }
}

