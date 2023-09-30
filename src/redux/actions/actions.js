import {
    ADD_POST,
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from "../constants/constants";

export const addPost = (data) => {
    return {
        type: ADD_POST,
        payload: data
    }
}

export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
    // payload 
});

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
    // payload 
});