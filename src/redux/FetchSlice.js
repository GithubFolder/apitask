import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// import {FetchDataThunkApi} from '../reduxThunkApi/FetchService';1


export const fetchData= createAsyncThunk("fetch/fetchData", async(payload) => { 
     const data = await fetch("http://20.204.122.192:8080/stlap/fetch-existing-loans", payload)
     return data.json();
});

const fetchSlice = createSlice({
    name : 'fetch',
    initialState:{
        data:[],
        loading:false,
    },
    extraReducers:{
        [fetchData.pending]:(state,action) => {
        // [FetchDataThunkApi.pending]:(state,action) => {
            state.loading = true;
        },
        [fetchData.fulfilled]:(state,action) => {
            // [FetchDataThunkApi.fulfilled]:(state,action) => {
            console.log(action);
            state.loading = false;
            state.data = action.payload;
        },
        [fetchData.rejected]:(state,action) => {
            // [FetchDataThunkApi.rejected]:(state,action) => {
            state.loading = false;
        },
    },
})

export default fetchSlice.reducer;