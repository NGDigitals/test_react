import {combineReducers} from 'redux';
import blogReducer from "../reducers/blogReducer";
import rootReducer from "../reducers/rootReducer";

const allReducers = combineReducers({
    blog: blogReducer,
    root: rootReducer
})

export default allReducers;