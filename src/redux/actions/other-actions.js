import {
    UPDATE_USER
} from "../constant/constants";

export const UpdateUser = (data) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: data,
    });
};