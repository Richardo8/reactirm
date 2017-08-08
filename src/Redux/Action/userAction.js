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

// 该方法改写为引入data和url参数，获取数据的时候就可以获取到相应数据。最开始不会报错的原因是设置了data的默认值为{}，python就不会报错
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
        return dispatch(receivePosts(subreddit='post', resJson))
    }
}

