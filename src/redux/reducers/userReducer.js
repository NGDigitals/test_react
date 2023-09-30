import {UPDATE_USER} from "../constant/constants";

const initialState = {
    errorMessage: "",
    loading: false,
    user:{
        first_name: 'Dele',
        last_name: 'Taiwo',
        age: 26
    },
};

const userReducer = (state = initialState, { payload }) => {

    switch (type) {
        // case IS_LOADING:
        //     return { 
        //         ...state, 
        //         loading: true
        //     };
        case UPDATE_USER:
            return { 
                ...state, 
                user: {
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    age: payload.age
                }, 
                loading: false 
            };
        // case CREATE_USER:
        //     return { ...state, users: [payload, ...state.users], loading: false };
        // case DELETE_USER:
        //     return { ...state, 
        //         users: state.users.filter((user) => user.id !== payload.id),
        //             loading: false };
        default:
            return state;
    }
};

export default userReducer;