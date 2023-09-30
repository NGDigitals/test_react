import { ADD_POST } from "../constants/constants";

const initialState = {
    posts: []
}

const blogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                posts: [action.payload, ...state.posts]
            }
        default:
            return state
    }
}

export default blogReducer