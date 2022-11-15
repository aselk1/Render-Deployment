const ADD_FOLLOWING = 'followers/ADD_FOLLOWING'
const REMOVE_FOLLOWING = 'followers/REMOVE_FOLLOWING'
const LOAD_FOLLOWING = 'followers/LOAD_FOLLOWING'

const loadFollowing = (listOfFollowing) => ({
    type: LOAD_FOLLOWING,
    payload: listOfFollowing
})

// const addFollowing = ({ follower_id }) => ({
//     type: ADD_FOLLOWING,
//     payload: follower_id
// })

// const removeFollowing = () => ({
//     type: REMOVE_FOLLOWING
// })

export const followingList = (id) => async (dispatch) => {
    const res = await fetch(`/api/followers/${id}`)
    if (res.ok) {
        const list = await res.json()
        // might have to tap into the list object
        // console.log for testing to see what is in list
        dispatch(loadFollowing(list))
        return list
    }
}

// export const follow = (follower_id, followed_id) => async (dispatch) => {
//     const res = await fetch('/api/followers', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             follower_id,
//             followed_id
//         })
//     })

//     if (res.ok) {
//         const followData = await res.json()
//         dispatch(addFollowing(followData))
//         return
//     } else if (res.status < 500) {
//         const data = await res.json()
//         if (data.errors) {
//             return data.errors
//         }
//     } else {
//         return ['An error occured. Please try again.']
//     }
// }

const initialState = {
    followers: null,
    following: null
}

export default function followReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FOLLOWING:
            return
        case REMOVE_FOLLOWING:
            return {

            }
        default:
            return state;
    }
}