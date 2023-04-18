import {configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./FetchSlice";


export const store = configureStore({
    reducer:fetchReducer,
});