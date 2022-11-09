import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {jobReducer} from "./slices/jobSlice";

const rootReducer = combineReducers({
    jobReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}