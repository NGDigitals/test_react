// import { createStore } from "redux";
// import allReducers from "../reducers";

// const store = createStore(allReducers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
// import { loggingMiddleware, testMiddleware } from "./middleware";

const store = configureStore({
    reducer: {
        user: userSlice,
    },
    // middleware: [loggingMiddleware, testMiddleware]
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(loggingMiddleware)
});

export default store;